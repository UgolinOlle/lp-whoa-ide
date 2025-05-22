"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { BarChart4, TimerReset, BookText, Layers3 } from "lucide-react";

import { cn } from "@/lib/utils";

import { IconsPlus } from "./icons/plus";
import { RadarArc } from "./ui/animations/radar";

const loopVariants = {
  animate: {
    y: ["0%", "-50%"],
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 25,
        ease: "linear",
      },
    },
  },
};

export const WhyAdoptSection = () => {
  const icons = [
    () => <BarChart4 className="w-6 h-6 text-primary" />,
    () => <TimerReset className="w-6 h-6 text-primary" />,
    () => <BookText className="w-6 h-6 text-primary" />,
    () => <Layers3 className="w-6 h-6 text-primary" />,
  ];
  const { t } = useTranslation();
  const features = (
    t("whyAdopt.features", { returnObjects: true }) as {
      title: string;
      description: string;
    }[]
  ).map((feature, i) => ({
    ...feature,
    icon: icons[i],
  }));

  return (
    <section
      id="why"
      className="relative py-16 bg-background border-x border-border border-dashed"
    >
      <div className="absolute left-0 top-0 h-full w-6 bg-diagonal-stripes pointer-events-none z-0" />
      <div className="absolute right-0 top-0 h-full w-6 bg-diagonal-stripes pointer-events-none z-0" />
      <div className="pointer-events-none absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-background z-10" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-full h-16 bg-gradient-to-t from-background z-10" />

      <div className="max-w-6xl mx-auto px-12 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-4xl font-bold text-foreground"
          >
            {t("whyAdopt.title")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-muted-foreground mt-4 text-sm md:text-base"
          >
            {t("whyAdopt.description")}
          </motion.p>

          <RadarArc />
        </div>

        <div className="relative max-h-[400px] overflow-hidden w-full">
          <div className="pointer-events-none absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-background z-10" />
          <div className="pointer-events-none absolute bottom-0 right-0 w-full h-16 bg-gradient-to-t from-background z-10" />

          <motion.div
            className="flex flex-col gap-4"
            variants={loopVariants}
            animate="animate"
          >
            {[...features, ...features].map((feature, index) => (
              <div
                key={index}
                className={cn(
                  "bg-gradient-to-br from-background to-muted border border-border p-4 backdrop-blur-md relative w-full",
                  "hover:shadow-sm transition-shadow duration-300 ease-in-out overflow-visible",
                )}
              >
                <IconsPlus className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-green-600" />
                <IconsPlus className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-3 h-3 text-green-600" />
                <IconsPlus className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-3 h-3 text-green-600" />
                <IconsPlus className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-3 h-3 text-green-600" />

                <div className="flex items-center justify-center mb-3">
                  {feature.icon()}
                </div>
                <h3 className="text-base font-semibold text-foreground mb-1 text-center">
                  {feature.title}
                </h3>
                <p className="text-xs text-muted-foreground text-center leading-snug">
                  {feature.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
