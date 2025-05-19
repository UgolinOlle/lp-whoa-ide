"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";

import { cn } from "@/lib/utils";

type GithubStarsProps = {
  className?: string;
};

export const GithubStars = ({ className }: GithubStarsProps) => {
  const [stars, setStars] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const res = await fetch(
          "https://api.github.com/repos/UgolinOlle/WhoaIDE",
          {
            headers: {
              Accept: "application/vnd.github+json",
            },
            next: { revalidate: 60 },
          },
        );

        if (!res.ok) throw new Error("GitHub API error");

        const data = await res.json();
        setStars(data.stargazers_count);
      } catch (error) {
        console.error("Failed to fetch stars:", error);
        setStars(null);
      } finally {
        setLoading(false);
      }
    };

    fetchStars();
  }, []);

  return (
    <a
      href="https://github.com/UgolinOlle/WhoaIDE"
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "relative inline-flex items-center gap-2 rounded-md border border-border px-3 py-1.5 text-sm font-medium bg-background shadow",
        "transition hover:scale-[1.03] hover:shadow-md",
        'before:absolute before:inset-0 before:-z-10 before:rounded-md before:blur-xl before:content-[""]',
        "before:bg-[conic-gradient(from_0deg,_red,_orange,_yellow,_green,_blue,_indigo,_violet,_red)]",
        "before:opacity-30 before:animate-spin-slower",
        "transition-all duration-300 ease-in-out",
        className,
      )}
    >
      {loading ? (
        <span className="text-muted-foreground animate-pulse">…</span>
      ) : stars !== null ? (
        <span>Stars on Github {stars.toLocaleString()}</span>
      ) : (
        <span className="text-muted-foreground">–</span>
      )}
      <Star className="w-4 h-4 text-yellow-500" />
    </a>
  );
};
