import type { Metadata } from "next";

export const defaultMetadata: Metadata = {
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
  metadataBase: new URL("https://whoa-ide.dev"), // modifiable selon ton domaine
  openGraph: {
    title: "Whoa IDE – Une configuration Neovim moderne et complète",
    description:
      "Une config Neovim pensée pour les développeurs modernes. Setup instantané, UI propre, plugins essentiels, support de langages, Git, debug et bien plus.",
    url: "https://whoa-ide.dev",
    siteName: "Whoa IDE",
    images: [
      {
        url: "https://whoa-ide.dev/og-image.jpg", // ou ton chemin d'image OG
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
