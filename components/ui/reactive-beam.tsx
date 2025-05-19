"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const BEAM_POSITIONS = [0.1, 0.3, 0.5, 0.7, 0.85, 0.95];

export const ReactiveBeams = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const mouseY = useMotionValue(0);
  const smoothMouseY = useSpring(mouseY, {
    stiffness: 50,
    damping: 20,
  });

  const beamScale = useTransform(smoothMouseY, (y: number) => {
    const center = window.innerHeight / 2;
    const dy = Math.abs(y - center);
    return Math.max(0.5, 1 - dy / 500);
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseY.set(e.clientY);
      setMouse({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseY]);

  return (
    <>
      {BEAM_POSITIONS.map((position, i) => {
        const beamX = window.innerWidth * position;
        const dx = Math.abs(mouse.x - beamX);
        const influenceX = Math.max(0, 1 - dx / 250); // horizontal influence

        const width = 2 + influenceX * 10;
        const opacity = 0.3 + influenceX * 0.4;

        return (
          <motion.div
            key={i}
            className="absolute top-0 z-0 pointer-events-none"
            style={{
              left: `${position * 100}%`,
              transform: "translateX(-50%)",
              width,
              height: "100%",
            }}
          >
            <motion.div
              className="w-full h-full origin-top"
              style={{
                background: `linear-gradient(to bottom, #10b98100 0%, #10b981aa 45%, #3b82f6aa 55%, #3b82f600 100%)`,
                scaleY: beamScale,
                opacity,
              }}
              transition={{ type: "spring", stiffness: 80, damping: 20 }}
            />
          </motion.div>
        );
      })}
    </>
  );
};
