"use client";

import { useEffect } from "react";

export default function ParallaxHero() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax-speed]"));
    if (elements.length === 0) return;

    let frame = 0;
    const media = window.matchMedia("(min-width: 1024px)");

    const update = () => {
      const offset = window.scrollY || 0;
      if (!media.matches) {
        elements.forEach((el) => {
          el.style.transform = "";
        });
        return;
      }
      elements.forEach((el) => {
        const speed = Number(el.dataset.parallaxSpeed || "0.04");
        el.style.transform = `translateY(${offset * speed}px)`;
      });
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        update();
        frame = 0;
      });
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    media.addEventListener?.("change", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      media.removeEventListener?.("change", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
