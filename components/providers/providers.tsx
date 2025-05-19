import type React from "react";
import { ThemeProvider } from "next-themes";

import { I18nProvider } from "./i18n-provider";

type ProviderProps = {
  children: React.ReactNode;
};

export const Providers = ({ children }: ProviderProps) => {
  return (
    <>
      <I18nProvider>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </I18nProvider>
    </>
  );
};
