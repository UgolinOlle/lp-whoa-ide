"use client";

import { cn } from "@/lib/utils";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactElement } from "react";
import * as React from "react";
import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";

const socialIconVariants = cva(
  "transition-transform text-muted-foreground hover:text-foreground",
  {
    variants: {
      size: {
        sm: "h-5 w-5",
        md: "h-6 w-6",
        lg: "h-8 w-8",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export type SocialIconLink = {
  href: string;
  label: string;
  icon: ReactElement<{ className?: string }>;
};

export type SocialIconsProps = {
  links?: SocialIconLink[];
} & React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof socialIconVariants>;

const SOCIALS_LINKS: SocialIconLink[] = [
  {
    icon: <IconBrandLinkedin />,
    href: "https://linkedin.com/in/ugolin-olle",
    label: "LinkedIn",
  },
  {
    icon: <IconBrandGithub />,
    href: "https://github.com/UgolinOlle/WhoaIDE",
    label: "GitHub",
  },
  {
    icon: <IconBrandDiscord />,
    href: "https://x.com/ugolin_olle",
    label: "Twitter",
  },
];

const SocialIcons = React.forwardRef<HTMLDivElement, SocialIconsProps>(
  ({ className, links = SOCIALS_LINKS, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex items-center gap-4", className)}
        {...props}
      >
        {links.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            whileHover={{ scale: 1.1 }}
          >
            <Link
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
            >
              {React.cloneElement(item.icon, {
                className: cn(socialIconVariants({ size })),
              })}
            </Link>
          </motion.div>
        ))}
      </div>
    );
  },
);
SocialIcons.displayName = "SocialIcons";

export { SocialIcons, socialIconVariants, SOCIALS_LINKS };
