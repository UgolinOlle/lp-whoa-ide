"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { IconsPlus } from "./icons/plus";
import { TextHoverEnter } from "./ui/animations/text-hover";

export const FeaturesSection = () => {
  const { t } = useTranslation("common");

  const raw = t("feature.sections", { returnObjects: true });
  const sections =
    typeof raw === "string" || !Array.isArray(raw)
      ? []
      : (raw as {
          title: string;
          hours: string;
          description: string;
          points: string[];
        }[]);

  return (
    <section className="relative my-16 py-16 border border-dashed border-border">
      <div className="absolute left-0 top-0 h-full w-6 bg-diagonal-stripes pointer-events-none z-0" />
      <div className="absolute right-0 top-0 h-full w-6 bg-diagonal-stripes pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto px-12 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
          {t("feature.title")}
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base mb-10">
          {t("feature.subtitle")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {sections.map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-muted p-5 sm:p-6 border border-border shadow-sm group rounded-lg"
            >
              <IconsPlus className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-green-600" />
              <IconsPlus className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-4 h-4 text-green-600" />
              <IconsPlus className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-4 h-4 text-green-600" />
              <IconsPlus className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-4 h-4 text-green-600" />

              <p className="text-xs font-medium text-green-600 mb-2">
                {feature.hours}
              </p>
              <TextHoverEnter className="text-base sm:text-lg font-semibold mb-1 text-foreground">
                {feature.title}
              </TextHoverEnter>
              <p className="text-sm text-muted-foreground mb-4">
                {feature.description}
              </p>
              <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
                {feature.points.map((point, idx) => (
                  <span
                    key={idx}
                    className="bg-background px-2 py-1 rounded shadow"
                  >
                    {point}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
