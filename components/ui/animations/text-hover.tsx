"use client";

import { cn } from "@/lib/utils";

type TextHoverEnterProps = {
  children: string;
  className?: string;
};

export function TextHoverEnter({ children, className }: TextHoverEnterProps) {
  if (typeof children !== "string") return null;

  const letters = children.split("").map((l) => (l === " " ? "\u00A0" : l));

  return (
    <div
      className={cn(
        "relative block select-none overflow-hidden whitespace-nowrap text-base font-medium",
        "text-neutral-500 dark:text-neutral-400",
        className,
      )}
      style={{ lineHeight: 0.9 }}
    >
      <div aria-hidden className="flex">
        {letters.map((letter, i) => (
          <span
            key={`top-${i}`}
            className="inline-block transition-transform duration-300 ease-in-out group-hover:-translate-y-full"
            style={{ transitionDelay: `${i * 25}ms` }}
          >
            {letter}
          </span>
        ))}
      </div>
      <div className="absolute inset-0 flex">
        {letters.map((letter, i) => (
          <span
            key={`bottom-${i}`}
            className="inline-block translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0"
            style={{ transitionDelay: `${i * 25}ms` }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
}
