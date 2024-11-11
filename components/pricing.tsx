import Image from "next/image";
import FeaturesImage01 from "../app/(default)/sales.jpg";
import FeaturesImage02 from "@/public/images/features-home-3-02.jpg";
import FeaturesImage03 from "@/public/images/features-home-3-03.jpg";

export default function FeaturesHome03() {
  return (
    <section className="relative">
      {/* Dark background */}
      <div
        className="absolute inset-0 bg-slate-900 pointer-events-none -z-10 [clip-path:polygon(0_0,_5760px_0,_5760px_calc(100%_-_352px),_0_100%)]"
        aria-hidden="true"
      ></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-20 md:pt-40 md:pb-44">
          {/* Hero content */}
          <div className="max-w-xl mx-auto md:max-w-none md:flex md:items-center md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-16 md:space-y-0">
            {/* Content */}
            <div className="max-w-4xl mx-auto text-left pb-12 md:pb-20">
              <h2 className="h2 font-playfair-display text-slate-100">
                Introducing AI-Generated Sales — your new KPI
              </h2>
              <p className="mt-4 text-gray-400 font-semibold">
                Go ahead and sleep. Your Shopify AI assistant works 24/7 to
                provide on-brand sales and service. AI sales establish a new
                metric standard for eCommerce chatbots.
              </p>
            </div>

            <Image
              src={FeaturesImage01}
              alt="FeaturesImage01"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
