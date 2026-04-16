# HTTPS deployment for `topgreen`

## Recommended layout

For this project, terminate TLS on a single reverse proxy running on the server, and keep the application container on plain HTTP behind it.

Current state:

- the app container serves HTTP on port `80`
- production compose in `/opt/mikrus/docker-compose.yaml` exposes `topgreen` on host port `40102`

The correct production pattern is:

1. public traffic goes to `80/443` on the server
2. reverse proxy handles Let's Encrypt certificates and HTTP -> HTTPS redirect
3. reverse proxy forwards requests to `127.0.0.1:40102`
4. the `topgreen` container is not exposed publicly except on localhost

## Why this is the right place for HTTPS

Do not configure certificates inside each application container unless you have a strong reason to do so. On this server you already have multiple projects in one compose file, so a single entry proxy is simpler:

- one place for certificates
- one place for redirects
- one place for security headers
- easier renewal
- no duplicated TLS config per project

## Required production change

In `/opt/mikrus/docker-compose.yaml`, change the published port for `topgreen` from:

```yaml
ports:
  - "40102:80"
```

to:

```yaml
ports:
  - "127.0.0.1:40102:80"
```

That keeps the app reachable from the reverse proxy on the server, but not directly from the internet.

You should make the same adjustment for the other apps if they are also meant to sit behind one proxy.

## Option A: host Nginx + certbot

Example host Nginx vhost for domain `topgreen.pl` and `www.topgreen.pl`:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name topgreen.pl www.topgreen.pl;

    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        return 301 https://topgreen.pl$request_uri;
    }
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name www.topgreen.pl;

    ssl_certificate /etc/letsencrypt/live/topgreen.pl/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/topgreen.pl/privkey.pem;

    return 301 https://topgreen.pl$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name topgreen.pl;

    ssl_certificate /etc/letsencrypt/live/topgreen.pl/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/topgreen.pl/privkey.pem;

    client_max_body_size 10m;

    location / {
        proxy_pass http://127.0.0.1:40102;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_read_timeout 60s;
    }
}
```

Then obtain the certificate, for example:

```bash
sudo mkdir -p /var/www/certbot
sudo certbot certonly --webroot -w /var/www/certbot -d topgreen.pl -d www.topgreen.pl
```

After that reload Nginx.

## Option B: Caddy in Docker

If you want everything in containers, Caddy is usually the cleanest option. It handles certificates automatically and is simpler than hand-maintained certbot + Nginx.

Example `docker-compose.yaml` fragment:

```yaml
services:
  caddy:
    image: caddy:2
    container_name: caddy
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./Caddyfile:/etc/caddy/Caddyfile:ro
      - caddy_data:/data
      - caddy_config:/config

  topgreen:
    image: karol3883/justcode:topgreen
    build:
      context: .
      dockerfile: docker/Dockerfile
    container_name: topgreen
    ports:
      - "127.0.0.1:40102:80"
    restart: unless-stopped

volumes:
  caddy_data:
  caddy_config:
```

Example `Caddyfile`:

```caddy
topgreen.pl, www.topgreen.pl {
    encode gzip zstd
    reverse_proxy 127.0.0.1:40102
}
```

For a new setup, Caddy is typically the lowest-maintenance choice.

## DNS and firewall

Before issuing certificates, make sure:

- `A` record for `topgreen.pl` points to the server public IP
- `A` record for `www.topgreen.pl` points to the same IP
- ports `80` and `443` are open in the firewall
- no other service is already binding to `80/443`

## App-specific notes

This app does not need native TLS support inside the container.

- client requests use relative paths like `/api/contact`
- the app serves plain HTTP internally, which is correct behind a reverse proxy
- `X-Forwarded-Proto` should still be passed by the proxy

## Recommendation

If the server already uses host Nginx for other sites, add one more server block there.

If you want a cleaner container-only setup and are free to choose, use Caddy as the public entrypoint and keep app containers bound to `127.0.0.1`.
