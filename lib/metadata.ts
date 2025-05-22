import type { Metadata } from "next";
import { cookies } from "next/headers";

export async function getDefaultMetadata() {
  const cookieStore = await cookies();
  const locale = cookieStore.get("NEXT_LOCALE")?.value || "fr";
  return locale === "en" ? defaultMetadataEn : defaultMetadataFr;
}

const defaultMetadataEn: Metadata = {
  title: "Whoa IDE – A modern and complete Neovim configuration",
  description:
    "Whoa IDE turns Neovim into a powerful, sleek, and ready-to-use development environment. Save time with an all-in-one setup including LSP, UI, Git, testing, debugging, and more.",
  keywords: [
    "Neovim",
    "Neovim config",
    "Whoa IDE",
    "Neovim IDE",
    "Neovim configuration",
    "Neovim LSP",
    "Neovim boilerplate",
    "Modern Neovim",
    "Code editor",
    "Whoa UI",
    "Dev setup",
    "Vim",
    "Neovim frontend",
    "Neo-tree",
    "Lazy.nvim",
  ],
  authors: [{ name: "Ugolin Ollé", url: "https://ugolin-olle.com" }],
  metadataBase: new URL("https://whoa-ide.dev"),
  openGraph: {
    title: "Whoa IDE – A modern and complete Neovim configuration",
    description:
      "A Neovim config designed for modern developers. Instant setup, clean UI, essential plugins, language support, Git, debugging, and more.",
    url: "https://whoa-ide.dev",
    siteName: "Whoa IDE",
    images: [
      {
        url: "https://whoa-ide.dev/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Whoa IDE – Modern Neovim Interface",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Whoa IDE – A frictionless Neovim setup for developers",
    description:
      "Whoa IDE transforms Neovim into a modern, fast, and complete code editor. Perfect for developers who want a streamlined experience.",
    images: ["https://whoa-ide.dev/og-image.jpg"],
    creator: "@ugolinolle",
  },
};

const defaultMetadataFr: Metadata = {
  title: "Whoa IDE – Une configuration Neovim moderne et complète",
  description:
    "Whoa IDE transforme Neovim en un environnement de développement puissant, esthétique et prêt à l'emploi. Gagnez du temps avec une configuration tout-en-un incluant LSP, UI, Git, tests, debug et plus encore.",
  keywords: [
    "Neovim",
    "Neovim config",
    "Whoa IDE",
    "IDE Neovim",
    "Configuration Neovim",
    "Neovim LSP",
    "Boilerplate Neovim",
    "Neovim moderne",
    "Editeur de code",
    "Whoa UI",
    "Dev setup",
    "Vim",
    "Neovim frontend",
    "Neo-tree",
    "Lazy.nvim",
  ],
  authors: [{ name: "Ugolin Ollé", url: "https://ugolin-olle.com" }],
  metadataBase: new URL("https://whoa-ide.dev"),
  openGraph: {
    title: "Whoa IDE – Une configuration Neovim moderne et complète",
    description:
      "Une config Neovim pensée pour les développeurs modernes. Setup instantané, UI propre, plugins essentiels, support de langages, Git, debug et bien plus.",
    url: "https://whoa-ide.dev",
    siteName: "Whoa IDE",
    images: [
      {
        url: "https://whoa-ide.dev/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Whoa IDE – Interface Neovim moderne",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Whoa IDE – Une config Neovim pensée pour coder sans friction",
    description:
      "Whoa IDE transforme Neovim en un éditeur moderne, rapide et complet. Parfait pour les développeurs qui veulent aller droit au but.",
    images: ["https://whoa-ide.dev/og-image.jpg"],
    creator: "@ugolinolle",
  },
};
