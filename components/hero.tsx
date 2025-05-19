"use client";

import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useRef } from "react";

import { AVATARS } from "@/lib/data";

import { AvatarCircles } from "./ui/avatar-circles";
import { Button } from "./ui/button";
import { TextHoverEnter } from "./ui/text-hover";
import { TextEffect } from "./ui/text-effect";
import { NeovimBadge } from "./icons/neovim-badge";
import { ReactiveBeams } from "./ui/reactive-beam";

export const Hero = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative max-w-5xl mx-auto px-6 py-16 text-center flex flex-col items-center"
    >
      <ReactiveBeams />

      {/* Avatars */}
      <AvatarCircles numPeople={99} avatarUrls={AVATARS} />

      {/* Subheading */}
      <TextEffect
        preset="fade-in-blur"
        speedSegment={0.3}
        as="p"
        className="text-sm text-muted-foreground mb-4 mt-2"
      >
        {t("hero.subheading")}
      </TextEffect>

      {/* Title avec badge Neovim */}
      <div className="text-6xl font-bold leading-tight w-full max-w-4xl text-balance flex flex-wrap justify-center items-center gap-2">
        <TextEffect
          preset="fade-in-blur"
          speedSegment={0.3}
          as="span"
          className="text-foreground"
        >
          {t("hero.title.strong")}
        </TextEffect>

        <NeovimBadge />

        <TextEffect
          preset="fade-in-blur"
          speedSegment={0.3}
          as="span"
          className="text-muted-foreground/75"
          delay={0.3}
        >
          {t("hero.title.muted")}
        </TextEffect>
      </div>

      {/* Description */}
      <TextEffect
        per="line"
        preset="fade-in-blur"
        speedSegment={0.3}
        delay={0.5}
        as="p"
        className="mt-4 text-muted-foreground max-w-lg w-full mx-auto z-10"
      >
        {t("hero.description")}
      </TextEffect>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-6 z-10"
      >
        <Button className="group">
          <TextHoverEnter className="text-primary-foreground">
            {t("hero.cta")}
          </TextHoverEnter>
          <span className="group-hover:-rotate-45 transition-transform duration-300 ease-in-out">
            <ArrowRightIcon className="w-4 h-4" />
          </span>
        </Button>
      </motion.div>
    </section>
  );
};
