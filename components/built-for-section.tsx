"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, animate } from "framer-motion";
import { useTranslation } from "react-i18next";

import { cn } from "@/lib/utils";
import { XRAY_MARGIN } from "@/lib/constants";

export const BuiltForDevsSection = () => {
  const { t } = useTranslation();
  const title = t("built.title").split("");
  const sectionRef = useRef<HTMLDivElement>(null);
  const spansRef = useRef<(HTMLSpanElement | null)[]>([]);
  const x = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 100, damping: 20 });

  const [letterRects, setLetterRects] = useState<
    { left: number; right: number }[]
  >([]);
  const [toggledStates, setToggledStates] = useState<boolean[]>(
    Array(title.length).fill(false),
  );

  const [prevX, setPrevX] = useState(0);

  const updateRects = () => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const updated = spansRef.current.map((el) => {
      if (!el) return { left: 0, right: 0 };
      const { left, right } = el.getBoundingClientRect();
      return {
        left: left - rect.left,
        right: right - rect.left,
      };
    });
    setLetterRects(updated);
  };

  useEffect(() => {
    updateRects();
    window.addEventListener("resize", updateRects);
    return () => window.removeEventListener("resize", updateRects);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const relativeX = e.clientX - rect.left;

      const isInSection =
        relativeX >= 0 &&
        relativeX <= rect.width &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      if (!isInSection) {
        animate(x, 0, { duration: 0.5, ease: "easeOut" });
        return;
      }

      x.set(relativeX);

      const direction = relativeX > prevX ? "right" : "left";
      const newToggled = [...toggledStates];

      letterRects.forEach((r, i) => {
        const zoneLeft = r.left - XRAY_MARGIN / 2;
        const zoneRight = r.right + XRAY_MARGIN / 2;

        const crossed =
          direction === "right"
            ? prevX <= zoneLeft && relativeX >= zoneLeft
            : prevX >= zoneRight && relativeX <= zoneRight;

        if (crossed) {
          newToggled[i] = direction === "right";
        }
      });

      setToggledStates(newToggled);
      setPrevX(relativeX);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, letterRects, toggledStates, prevX]);

  return (
    <section
      ref={sectionRef}
      className="relative my-32 py-24 sm:py-32 overflow-hidden bg-muted rounded-[2rem]"
    >
      <motion.div
        className="pointer-events-none absolute top-0 h-full w-1 bg-gradient-to-b from-transparent via-green-500/30 to-transparent z-10"
        style={{ left: smoothX }}
      />

      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
        <span className="text-4xl sm:text-5xl mb-4 inline-block">🧩</span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold flex flex-wrap justify-center">
          {title.map((char, i) => (
            <span
              key={i}
              ref={(el) => {
                spansRef.current[i] = el;
              }}
              className={cn(
                "relative transition-all duration-200 whitespace-pre",
                toggledStates[i] ? "letter-xray" : "text-foreground",
              )}
            >
              {char}
            </span>
          ))}
        </h2>

        <p className="mt-6 text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
          {t("built.description")}
        </p>
      </div>
    </section>
  );
};
