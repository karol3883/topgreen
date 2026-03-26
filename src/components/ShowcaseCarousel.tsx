"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type CarouselItem = {
  src: string;
  title: string;
  caption: string;
};

type ShowcaseCarouselProps = {
  items: CarouselItem[];
};

export default function ShowcaseCarousel({ items }: ShowcaseCarouselProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef(0);
  const total = items.length;
  const safeIndex = useMemo(() => (total === 0 ? 0 : (index + total) % total), [index, total]);

  if (total === 0) return null;

  const prev = () => setIndex((prevIndex) => (prevIndex - 1 + total) % total);
  const next = () => setIndex((prevIndex) => (prevIndex + 1) % total);

  useEffect(() => {
    if (paused || total <= 1) return;
    const timer = window.setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % total);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [paused, total]);

  return (
    <div
      className="relative overflow-hidden rounded-3xl border border-tg-line bg-tg-dark shadow-[0_18px_50px_rgba(0,0,0,0.12)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={(event) => {
        setPaused(true);
        touchStartX.current = event.touches[0]?.clientX ?? null;
        touchDeltaX.current = 0;
      }}
      onTouchMove={(event) => {
        if (touchStartX.current === null) return;
        touchDeltaX.current = (event.touches[0]?.clientX ?? 0) - touchStartX.current;
      }}
      onTouchEnd={() => {
        const delta = touchDeltaX.current;
        const threshold = 40;
        if (delta > threshold) prev();
        if (delta < -threshold) next();
        touchStartX.current = null;
        touchDeltaX.current = 0;
        setPaused(false);
      }}
    >
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${safeIndex * 100}%)` }}
      >
        {items.map((item) => (
          <div key={item.title} className="relative h-[340px] w-full shrink-0 md:h-[420px]">
            <Image
              src={item.src}
              alt={item.title}
              fill
              loading="lazy"
              className="object-cover saturate-[0.85] contrast-[1.05] brightness-[0.95]"
              sizes="(max-width: 1024px) 92vw, 980px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent"></div>
            <div className="absolute bottom-5 left-6 right-6 text-white">
              <p className="text-xs uppercase tracking-[0.3em] text-white/70">Realizacja</p>
              <h3 className="mt-2 text-2xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-white/80">{item.caption}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-tg-dark/90 p-2 text-tg-secondary shadow-sm"
        aria-label="Poprzednie zdjęcie"
      >
        <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
          <path
            d="M12.5 5l-5 5 5 5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-tg-dark/90 p-2 text-tg-secondary shadow-sm"
        aria-label="Następne zdjęcie"
      >
        <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
          <path
            d="M7.5 5l5 5-5 5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div className="absolute bottom-4 right-5 flex items-center gap-2">
        {items.map((item, dotIndex) => (
          <button
            key={item.title}
            type="button"
            className={
              dotIndex === safeIndex
                ? "h-2.5 w-2.5 rounded-full bg-tg-primary"
                : "h-2.5 w-2.5 rounded-full bg-tg-line"
            }
            onClick={() => setIndex(dotIndex)}
            aria-label={`Przejdź do slajdu ${dotIndex + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
