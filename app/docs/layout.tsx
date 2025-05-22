import { AppSidebar } from "@/components/ui/doc/app-sidebar";
import { AutoBreadcrumb } from "@/components/ui/doc/auto-breadcrumb";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/doc/sidebar";
import { LangSwitcherDoc } from "@/components/ui/lang-switcher";
import { Separator } from "@/components/ui/separator";

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex items-start gap-14">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b px-4 bg-gradient-to-r from-background to-green-100">
            <SidebarTrigger className="-ml-1 mr-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <AutoBreadcrumb />
            <div className="ml-auto flex items-center gap-2">
              <LangSwitcherDoc />
            </div>
          </header>
          <main className="p-10 bg-gradient-to-br from-background to-green-100/20">
            {children}
          </main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
