"use client";

import { useEffect } from "react";

export default function RevealInit() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    elements.forEach((el, index) => {
      el.style.setProperty("--delay", `${0.15 + index * 0.08}s`);
    });
  }, []);

  return null;
}
