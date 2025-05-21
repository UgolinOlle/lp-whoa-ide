"use client";

import Link from "next/link";
import { useTranslation, Trans } from "react-i18next";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const { t } = useTranslation();
  const faqItems = t("faq.items", { returnObjects: true });

  return (
    <section className="relative my-12 py-16 md:py-24 overflow-hidden">
      {/* Fixed-position beams */}
      <div className="pointer-events-none absolute top-0 left-0 z-0 h-full w-full">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="beam-line absolute left-0 right-0"
            style={{ top: `${100 + i * 120}px` }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 md:px-6">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
            {t("faq.title")}
          </h2>
          <p className="text-muted-foreground mt-4 text-balance">
            {t("faq.description")}
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-xl">
          <Accordion
            type="single"
            collapsible
            className="bg-card ring-muted w-full rounded-2xl border px-8 py-3 shadow-sm ring-4 dark:ring-0"
          >
            {faqItems.map((item, idx) => (
              <AccordionItem
                key={idx}
                value={`faq-${idx}`}
                className="border-dashed"
              >
                <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-base whitespace-pre-line">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p className="text-muted-foreground mt-6 px-8 text-center text-sm">
            <Trans
              i18nKey="faq.footer"
              t={t}
              components={{
                1: (
                  <Link
                    href="#"
                    className="text-primary font-medium hover:underline"
                  />
                ),
              }}
            />
          </p>
        </div>
      </div>
    </section>
  );
};
