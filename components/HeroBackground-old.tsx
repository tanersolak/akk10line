"use client";

import { useEffect, useState } from "react";
import NextImage from "next/image";

// Add your background image paths here — put them in public/hero/
const SLIDES = [
  "/hero/bg1.jpg",
  "/hero/bg2.webp",
  "/hero/bg3.jpeg",
  "/hero/bg4.jpeg",
];

export default function HeroBackground() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setPrev(current);
      setCurrent((c) => (c + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
      {/* Dark overlay so text stays readable */}
      <div className="absolute inset-0 bg-blue-950/50 z-10" />

      {/* Previous slide — fades out */}
      {prev !== null && (
        <div
          key={`prev-${prev}`}
          className="absolute inset-0 transition-opacity duration-1000 opacity-0"
        >
          <NextImage
            src={SLIDES[prev]}
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Current slide — fades in */}
      <div
        key={`curr-${current}`}
        className="absolute inset-0 transition-opacity duration-1000 opacity-100"
      >
        <NextImage
          src={SLIDES[current]}
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
