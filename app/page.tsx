import { Hero } from "@/components/hero";
import { FeaturesSection } from "@/components/features-section";
import { BuiltForDevsSection } from "@/components/built-for-section";
import { WhyAdoptSection } from "@/components/why-adopt-section";
import { FAQSection } from "@/components/faq-section";

import { getDefaultMetadata } from "@/lib/metadata";

export default function LandingPage() {
  return (
    <main className="bg-background py-16 max-w-6xl mx-auto">
      <Hero />
      <FeaturesSection />
      <BuiltForDevsSection />
      <WhyAdoptSection />
      <FAQSection />
    </main>
  );
}

export async function generateMetadata() {
  return await getDefaultMetadata();
}
