"use client";

import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

export function DocBanner({ isActive }: { isActive?: boolean }) {
  const { t } = useTranslation();

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-2 border-b",
        "bg-gradient-to-br from-background to-green-100/20 p-4 dark:to-green-900/20",
        isActive ? "block" : "hidden"
      )}
    >
      <p className="text-sm text-muted-foreground">{t("doc.banner")}</p>
    </div>
  );
}
