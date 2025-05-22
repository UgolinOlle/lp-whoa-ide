"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

import { cn } from "@/lib/utils";

type AnimatedLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export const AnimatedLink = ({
  href,
  children,
  className,
}: AnimatedLinkProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      className={cn("relative inline-block px-1", className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="relative z-10 text-muted-foreground hover:text-accent-foreground transition-colors duration-150">
        {children}
      </span>

      {/* Underline */}
      <motion.span
        layoutId="header-underline"
        className="absolute left-0 -bottom-0.5 h-[1px] w-full bg-primary"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{
          opacity: hovered ? 1 : 0,
          scaleX: hovered ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{ transformOrigin: "left" }}
      />
    </Link>
  );
};
