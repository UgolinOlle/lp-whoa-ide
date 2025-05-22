import { notFound } from "next/navigation";
import { cookies } from "next/headers";

import { Toc } from "@/components/ui/doc/toc";
import { Typography } from "@/components/ui/doc/typography";
import { getDocsForSlug, getDocsMetadata } from "@/lib/markdown";

interface PageProps {
  params: Promise<{
    slug?: string[];
  }>;
}

export default async function DocsPage({ params }: PageProps) {
  const { slug = [] } = await params;
  const pathName = slug.join("/");

  const cookiesList = await cookies();
  const locale = cookiesList.get("NEXT_LOCALE")?.value || "fr";
  const res = await getDocsForSlug(pathName, locale);

  if (!res) notFound();

  return (
    <div className="flex items-start gap-14">
      <div className="flex-[3]">
        <Typography>{res.content}</Typography>
      </div>
      <Toc path={pathName} locale={locale} />
    </div>
  );
}

export async function generateMetadata({ params }: PageProps) {
  const { slug = [] } = await params;
  const pathName = slug.join("/");

  const cookiesList = await cookies();
  const locale = cookiesList.get("NEXT_LOCALE")?.value || "fr";

  const metadata = await getDocsMetadata(pathName, locale);
  if (!metadata) return null;

  return {
    title: `${metadata.title} – WhoaIDE Documentation`,
    description: metadata.description,
  };
}
