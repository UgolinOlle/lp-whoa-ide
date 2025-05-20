import { cn } from "@/lib/utils";
import Neovim from "./neovim";

export const NeovimBadge = ({ className }: { className?: string }) => {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center align-middle",
        "w-20 h-20 mx-2 rounded-[1.5rem] border-4 border-primary-foreground shadow-2xl overflow-hidden",
        "bg-gradient-to-tl from-green-400/20 via-emerald-600/20 to-green-900/20",
        "relative -rotate-6",
        className,
      )}
    >
      <span className="absolute inset-0 z-0 opacity-[0.08] mix-blend-soft-light bg-[url('/noise.svg')]" />
      <Neovim className="relative z-10 w-12 h-12 text-white" />
    </span>
  );
};
