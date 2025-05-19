"use client";

import { useTranslation } from "react-i18next";
import { CheckIcon, GlobeIcon } from "lucide-react";
import i18next from "i18next";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { LANGUAGES } from "@/lib/data";
import { cn } from "@/lib/utils";

export function LangSwitcher() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const changeLanguage = (code: string) => {
    i18next.changeLanguage(code);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          <GlobeIcon className="mr-2 h-4 w-4" />
          {LANGUAGES.find((l) => l.code === currentLang)?.label}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {LANGUAGES.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={cn("flex items-center justify-between", {
              "font-semibold": currentLang === lang.code,
            })}
          >
            {lang.label}
            {currentLang === lang.code && (
              <CheckIcon className="ml-2 h-4 w-4 text-primary" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
