import "i18next";

interface I18nNamespaces {
  common: typeof import("@/locales/en/common.json");
}

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "common";
    resources: I18nNamespaces;
  }
}
