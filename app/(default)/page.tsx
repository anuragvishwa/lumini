export const metadata = {
  title: "Home - Tidy",
  description: "Page description",
};

import Hero from "@/components/hero-home";
import FeaturesBlocks from "@/components/features-blocks";
import Features from "@/components/features-home";
import Features02 from "@/components/features-home-02";
import Features03 from "@/components/features-home-03";
import Target from "@/components/target";
import PricingSection from "@/components/pricing";
import Cta from "@/components/cta";
import Gain from "./gain";
import Tabs from "./tabs";
import NumberTabs from "./numberTabs";
import PageIllustration from "./page-illustration";

export default function Home() {
  return (
    <>
      {/* <div
        className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1"
        aria-hidden="true"
      >
        <PageIllustration />
      </div> */}

      <Hero />

      <Features02 />

      <NumberTabs />
      <Tabs />
      <FeaturesBlocks />
      <Features />
      <Features03 />

      <Target />

      <PricingSection />
      <Gain />
    </>
  );
}
