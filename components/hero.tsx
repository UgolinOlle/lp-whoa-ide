import { ArrowRightIcon } from "lucide-react";

import { AVATARS } from "@/lib/data";

import { AvatarCircles } from "./ui/avatar-circles";
import { Button } from "./ui/button";
import { TextHoverEnter } from "./ui/text-hover";

export const Hero = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 text-center flex flex-col items-center">
      <AvatarCircles numPeople={99} avatarUrls={AVATARS} />

      <p className="text-sm text-muted-foreground mb-4 mt-2">
        Loved by 500+ Developers and Founders
      </p>

      <h1 className="text-6xl font-bold leading-tight w-full max-w-4xl">
        <span className="text-foreground">The Ultimate Neovim </span>{" "}
        <span className="text-muted-foreground/50">
          Starter Kit to Code Faster, Smarter, and Cleaner
        </span>
      </h1>

      <p className="mt-4 text-muted-foreground max-w-lg w-full mx-auto">
        Everything you need to build production-grade apps — already wired,
        already beautiful.
      </p>

      <Button className="mt-6 group">
        <TextHoverEnter className="text-primary-foreground">
          Use Now
        </TextHoverEnter>
        <span className="group-hover:-rotate-45 transition-transform duration-300 ease-in-out">
          <ArrowRightIcon className="w-4 h-4" />
        </span>
      </Button>
    </section>
  );
};
