import Image from "next/image";
import FeaturesImage01 from "./../app/(default)/ai-driven.png";
import FeaturesImage02 from "@/public/images/features-home-3-02.jpg";
import FeaturesImage03 from "@/public/images/features-home-3-03.jpg";

export default function FeaturesHome03() {
  return (
    <section className="relative font-roboto">
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
              <h2 className="h2 font-roboto text-white">
                An abundance of AI-driven insights
              </h2>
              <div className="text-white text-left mt-4 flex flex-col gap-4">
                <p className="flex items-center gap-2">
                  <span className="w-8 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full -top-8 left-8">
                    <svg
                      className="w-8 h-8 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="text-white"
                        d="M9 16.2l-4.6-4.6 1.4-1.4 3.2 3.2 7.8-7.8 1.4 1.4-9.2 9.2z"
                      />
                    </svg>
                  </span>
                  A dashboard flush with AI-generated insights
                </p>

                <p className="flex items-center gap-2">
                  <span className="w-8 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full -top-8 left-8">
                    <svg
                      className="w-8 h-8 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="text-white"
                        d="M9 16.2l-4.6-4.6 1.4-1.4 3.2 3.2 7.8-7.8 1.4 1.4-9.2 9.2z"
                      />
                    </svg>
                  </span>
                  Every AI metric is tracked—CVR, AOV, sales, etc.
                </p>

                <p className="flex items-center gap-2">
                  <span className="w-8 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full -top-8 left-8">
                    <svg
                      className="w-8 h-8 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="text-white"
                        d="M9 16.2l-4.6-4.6 1.4-1.4 3.2 3.2 7.8-7.8 1.4 1.4-9.2 9.2z"
                      />
                    </svg>
                  </span>
                  View helpful versus non-helpful responses
                </p>
              </div>
            </div>

            <Image
              src={FeaturesImage01}
              alt="FeaturesImage01"
              className="rounded-md"
              width={600}
              height={350}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
