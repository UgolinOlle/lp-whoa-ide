"use client";

import { usePathname } from "next/navigation";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDocs = pathname.startsWith("/docs");

  return (
    <>
      {!isDocs && <Header />}
      {children}
      {!isDocs && <Footer />}
    </>
  );
}
