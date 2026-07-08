"use client";

import { useEffect, useState } from "react";
import NextImage from "next/image";

const SLIDES = [
  "/hero/bg11.jpg",
  "/hero/bg22.webp",
  "/hero/bg3.jpg",
  "/hero/bg4.webp",
];

export default function HeroBackground() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [sliding, setSliding] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setSliding(true);
      setPrev(current);
      setCurrent((c) => (c + 1) % SLIDES.length);

      // Reset sliding state after animation completes
      setTimeout(() => {
        setPrev(null);
        setSliding(false);
      }, 800);
    }, 5000);

    return () => clearInterval(timer);
  }, [current]);

  return (
    <>
      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to   { transform: translateX(0%); }
        }
        @keyframes slideOutLeft {
          from { transform: translateX(0%); }
          to   { transform: translateX(-100%); }
        }
        .slide-in  { animation: slideInRight 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
        .slide-out { animation: slideOutLeft 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
      `}</style>

      <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-blue-950/50 z-10" />

        {/* Previous slide — slides out to the left */}
        {prev !== null && sliding && (
          <div key={`prev-${prev}`} className="absolute inset-0 slide-out">
            <NextImage
              src={SLIDES[prev]}
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Current slide — slides in from the right */}
        <div key={`curr-${current}`} className={`absolute inset-0 ${sliding ? "slide-in" : ""}`}>
          <NextImage
            src={SLIDES[current]}
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </>
  );
}
