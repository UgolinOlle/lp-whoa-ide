import {
  Blocks,
  Bolt,
  BrushCleaning,
  Bug,
  Code,
  Computer,
  Container,
  Ellipsis,
  Flag,
  FolderKanban,
  GitFork,
  Hammer,
  Handshake,
  Keyboard,
  LandPlot,
  Logs,
  Notebook,
  Palette,
  ShieldCheck,
  SquareBottomDashedScissors,
  SquareTerminal,
  Terminal,
  ToyBrick,
  User,
  Users,
} from "lucide-react";

export const DOC_ROUTES = {
  versions: ["1.0.0-alpha"],
  navMain: [
    {
      title: "Getting Started",
      url: "/docs/introduction",
      items: [
        {
          title: "Introduction",
          url: "/docs/introduction",
          icon: <Handshake />,
        },
        {
          title: "Installation",
          url: "/docs/installation",
          icon: <Bolt />,
        },
        {
          title: "Project Structure",
          url: "/docs/project-structure",
          icon: <FolderKanban />,
        },
      ],
    },
    {
      title: "Core",
      url: "/docs/lazy",
      items: [
        {
          title: "Lazy",
          url: "/docs/lazy",
          icon: <Container />,
        },
        {
          title: "Plugins",
          url: "/docs/plugins",
          icon: <Blocks />,
        },
        {
          title: "Code",
          url: "/docs/code",
          icon: <Code />,
        },
        {
          title: "Editor",
          url: "/docs/editor",
          icon: <Computer />,
        },
        {
          title: "LSP",
          url: "/docs/lsp",
          icon: <GitFork />,
        },
        {
          title: "UI",
          url: "/docs/ui",
          icon: <BrushCleaning />,
        },
        {
          title: "Snippets",
          url: "/docs/snippets",
          icon: <SquareBottomDashedScissors />,
        },
        {
          title: "Commands",
          url: "/docs/commands",
          icon: <SquareTerminal />,
        },
        {
          title: "Keymaps",
          url: "/docs/keymaps",
          icon: <Keyboard />,
        },
        {
          title: "Options",
          url: "/docs/options",
          icon: <Ellipsis />,
        },
      ],
    },
    {
      title: "Whoa Core",
      url: "/docs/whoa-core",
      items: [
        {
          title: "Auto commands",
          url: "/docs/whoa-core/auto-commands",
          icon: <Terminal />,
        },
        {
          title: "Checker",
          url: "/docs/whoa-core/checker",
          icon: <ShieldCheck />,
        },
        {
          title: "Features",
          url: "/docs/whoa-core/features",
          icon: <Flag />,
        },
        {
          title: "Logger",
          url: "/docs/whoa-core/logger",
          icon: <Logs />,
        },
        {
          title: "Notes",
          url: "/docs/whoa-core/notes",
          icon: <Notebook />,
        },
        {
          title: "Plugins",
          url: "/docs/whoa-core/plugins",
          icon: <ToyBrick />,
        },
        {
          title: "User",
          url: "/docs/whoa-core/user",
          icon: <User />,
        },
        {
          title: "Utils",
          url: "/docs/whoa-core/utils",
          icon: <Hammer />,
        },
        {
          title: "Themes",
          url: "/docs/whoa-core/themes",
          icon: <Palette />,
        },
        {
          title: "Icons",
          url: "/docs/whoa-core/icons",
          icon: <LandPlot />,
        },
      ],
    },
    {
      title: "Community",
      url: "/docs/community",
      items: [
        {
          title: "Contribution Guide",
          url: "/docs/community/contributing",
          icon: <Users />,
        },
        {
          title: "Issues",
          url: "/docs/community/issues",
          icon: <Bug />,
        },
      ],
    },
  ],
};
