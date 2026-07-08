"use client";

import { useEffect, useRef, useState } from "react";
import NextImage from "next/image";

export interface CarouselCard {
  title: string;
  body: string;
  image: string;
  alt: string;
}

const DEFAULT_CARDS: CarouselCard[] = [
  {
    title: "L'Oréal Engelliler Haftası",
    body: "Engelleri sevgi ve farkındalıkla aşmak için bir aradaydık.",
    image: "/cards/swimming.jpeg",
    alt: "Altan Kaan yüzme yarışında",
  },
  {
    title: "Bu Kapı Herkese Açık Değil!",
    body: "Engelli bireyler için farkındalık çalışmamız, büyük ilgi topladı.",
    image: "/cards/loreal.jpg",
    alt: "Altan Kaan, L'Oréal'de",
  },
  {
    title: "Engelli Hakları Savunucusu",
    body: "Fırsat verildiğinde engelli bireylerin neler başarabileceğini göstermeyi misyon edindi.",
    image: "/cards/advocacy.jpg",
    alt: "Altan Kaan bir etkinlikte konuşma yapıyor",
  },
  {
    title: "Onların gözünden L'Oréal",
    body: "Engelli çalışma arkadaşlarımızın gözünden L'Oréal'i, engelleri nasıl birlikte aştığımızı ve farklılıklarla zenginleşme vizyonumuzu konuştuk.",
    image: "/cards/story.jpeg",
    alt: "Altan Kaan'ın kişisel yolculuğu",
  },
];

export default function CardCarousel({ cards = DEFAULT_CARDS }: { cards?: CarouselCard[] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = cards.length;

  useEffect(() => {
    if (!paused) {
      intervalRef.current = setInterval(() => {
        setActive((prev) => (prev + 1) % total);
      }, 3500);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [paused, total]);

  const goTo = (i: number) => {
    setActive(i);
    setPaused(true);
    setTimeout(() => setPaused(false), 6000);
  };

  const getPosition = (index: number) => {
    const pos = (index - active + total) % total;
    const positions = [
      { x: "0%",    z: 120,  scale: 1,    opacity: 1,    zIndex: 4, blur: false },
      { x: "68%",   z: -20,  scale: 0.82, opacity: 0.85, zIndex: 3, blur: true  },
      { x: "0%",    z: -180, scale: 0.65, opacity: 0.45, zIndex: 1, blur: true  },
      { x: "-68%",  z: -20,  scale: 0.82, opacity: 0.85, zIndex: 3, blur: true  },
    ];
    return positions[pos];
  };

  return (
    <section className="py-24 px-6 overflow-hidden bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-blue-500 mb-3">
            Öne Çıkanlar
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Bu yolculuğu tanımlayan anlar
          </h2>
        </div>

        {/* Carousel stage */}
        <div
          className="relative flex items-center justify-center"
          style={{ height: "640px", perspective: "1200px" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {cards.map((card, i) => {
            const { x, z, scale, opacity, zIndex, blur } = getPosition(i);
            return (
              <div
                key={i}
                onClick={() => goTo(i)}
                style={{
                  position: "absolute",
                  transform: `translateX(${x}) translateZ(${z}px) scale(${scale})`,
                  opacity,
                  zIndex,
                  filter: blur ? "blur(1px)" : "none",
                  transition: "all 0.65s cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: i === active ? "default" : "pointer",
                  width: "380px",
                }}
              >
                <div
                  className={`bg-white rounded-3xl overflow-hidden shadow-xl border flex flex-col ${
                    i === active ? "border-blue-300 shadow-blue-100" : "border-blue-100"
                  }`}
                  style={{ minHeight: "520px" }}
                >
                  {/* Image */}
                  <div className="relative w-full h-72 bg-blue-100 flex-shrink-0">
                    <NextImage
                      src={card.image}
                      alt={card.alt}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 opacity-20" />
                  </div>

                  {/* Text */}
                  <div className="p-6 flex-1 flex flex-col justify-center">
                    <h3 className="text-blue-900 font-bold text-lg mb-2 leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-blue-500 text-sm leading-relaxed">
                      {card.body}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`${i + 1}. karta git`}
              className={`rounded-full transition-all duration-300 ${
                i === active
                  ? "bg-blue-600 w-6 h-2.5"
                  : "bg-blue-200 hover:bg-blue-300 w-2.5 h-2.5"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
