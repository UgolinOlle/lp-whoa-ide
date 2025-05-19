"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { IconsPlus } from "./icons/plus";
import { TextHoverEnter } from "./ui/text-hover";

export const FeaturesSection = () => {
  const { t } = useTranslation();

  const sections = t("feature.sections", { returnObjects: true }) as {
    title: string;
    hours: string;
    description: string;
    points: string[];
  }[];

  return (
    <section className="relative py-16 border-border border border-dashed">
      <div className="absolute left-0 top-0 h-full w-10 bg-diagonal-stripes pointer-events-none z-0" />
      <div className="absolute right-0 top-0 h-full w-10 bg-diagonal-stripes pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-2">{t("feature.title")}</h2>
        <p className="text-muted-foreground mb-10">{t("feature.subtitle")}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-muted p-6 border shadow-sm group"
            >
              {/* IconsPlus in 4 corners */}
              <IconsPlus className="absolute -top-2 -left-2 w-4 h-4 text-green-600" />
              <IconsPlus className="absolute -top-2 -right-2 w-4 h-4 text-green-600" />
              <IconsPlus className="absolute -bottom-2 -left-2 w-4 h-4 text-green-600" />
              <IconsPlus className="absolute -bottom-2 -right-2 w-4 h-4 text-green-600" />

              <p className="text-xs font-medium text-green-600 mb-2">
                {feature.hours}
              </p>
              <TextHoverEnter className="text-lg font-semibold mb-1 text-foreground">
                {feature.title}
              </TextHoverEnter>
              <p className="text-sm text-muted-foreground mb-4">
                {feature.description}
              </p>
              <div className="flex flex-wrap gap-2 text-sm">
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
