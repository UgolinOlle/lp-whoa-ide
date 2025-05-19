"use client";

import { ArrowRightIcon } from "lucide-react";

import { AVATARS } from "@/lib/data";

import { AvatarCircles } from "./ui/avatar-circles";
import { Button } from "./ui/button";
import { TextHoverEnter } from "./ui/text-hover";
import { useTranslation } from "react-i18next";

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="max-w-5xl mx-auto px-6 py-16 text-center flex flex-col items-center">
      <AvatarCircles numPeople={99} avatarUrls={AVATARS} />

      <p className="text-sm text-muted-foreground mb-4 mt-2">
        {t("hero.subheading")}
      </p>

      <h1 className="text-6xl font-bold leading-tight w-full max-w-4xl">
        <span className="text-foreground">{t("hero.title.strong")}</span>{" "}
        <span className="text-muted-foreground/50">
          {t("hero.title.muted")}
        </span>
      </h1>

      <p className="mt-4 text-muted-foreground max-w-lg w-full mx-auto">
        {t("hero.description")}
      </p>

      <Button className="mt-6 group">
        <TextHoverEnter className="text-primary-foreground">
          {t("hero.cta")}
        </TextHoverEnter>
        <span className="group-hover:-rotate-45 transition-transform duration-300 ease-in-out">
          <ArrowRightIcon className="w-4 h-4" />
        </span>
      </Button>
    </section>
  );
};
