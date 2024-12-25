import Image from "next/image";
import FeaturesImage01 from "@/public/images/undraw_messages_re_qy9x.svg";
import FeaturesImage02 from "@/public/images/undraw_chatting_re_j55r (1).svg";
import FeaturesImage03 from "../(default)/support.svg";

export default function NumberTabs() {
  return (
    <section className="relative">
      {/* Dark background */}
      <div
        className="absolute inset-0 bg-slate-900 pointer-events-none -z-10 [clip-path:polygon(0_0,_5760px_0,_5760px_calc(100%_-_352px),_0_100%)] h-96 md:h-auto md:mb-64"
        aria-hidden="true"
      ></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-roboto text-slate-100">
              Personalization agents for your business
            </h2>
          </div>

          {/* Section content */}
          <div className="max-w-sm mx-auto md:max-w-none grid gap-12 md:grid-cols-3 md:gap-x-10 md:gap-y-10 items-start">
            {/* Article container with fixed height */}
            <article
              className="flex flex-col justify-between" // Set a fixed height for the article
              data-aos="fade-up"
            >
              <a className="relative block group mb-4" href="#0">
                <div
                  className="absolute inset-0 pointer-events-none border-2 border-slate-500 opacity-20 translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-300 ease-out -z-10"
                  aria-hidden="true"
                ></div>
                <div className="overflow-hidden">
                  {" "}
                  {/* Fixed height for images */}
                  <Image
                    className="w-full h-full object-contain group-hover:scale-105 transition duration-700 ease-out"
                    src={FeaturesImage01}
                    alt="News 01"
                  />
                </div>
                <div className="w-16 h-16 absolute bg-gradient-to-b from-blue-500 to-blue-600 rounded-full -top-8 left-8">
                  <svg
                    className="w-16 h-16 fill-current"
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path className="text-white" d="..." />
                  </svg>
                </div>
              </a>
              <h3 className="h4 font-roboto mb-2">
                <a
                  className="text-slate-800 text-lg hover:underline hover:decoration-blue-100"
                  href="#0"
                >
                  AI Sales Agents
                </a>
              </h3>
              <p className="text-md text-slate-500">
                Our AI agents are trained to emulate the behavior of your sales
                team...
              </p>
            </article>

            {/* Repeat similar structure for other articles */}
            <article
              className="flex flex-col justify-between"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <a className="relative block group mb-4" href="#0">
                <div className="absolute inset-0 pointer-events-none border-2 border-slate-500 opacity-20 translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-300 ease-out -z-10"></div>
                <div className="overflow-hidden">
                  <Image
                    className="w-full h-full object-contain group-hover:scale-105 transition duration-700 ease-out"
                    src={FeaturesImage02}
                    alt="News 02"
                  />
                </div>
                <div className="w-16 h-16 absolute bg-gradient-to-b from-blue-500 to-blue-600 rounded-full -top-8 left-8">
                  <svg
                    className="w-16 h-16 fill-current"
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path className="text-white" d="..." />
                  </svg>
                </div>
              </a>
              <h3 className="h4 font-roboto mb-2">
                <a
                  className="text-slate-800 text-lg hover:underline hover:decoration-blue-100"
                  href="#0"
                >
                  Sector Specific Reranker
                </a>
              </h3>
              <p className="text-md text-slate-500">
                Our Reranker predicts products each user is more likely to
                purchase...
              </p>
            </article>

            <article
              className="flex flex-col justify-between"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <a className="relative block group mb-4" href="#0">
                <div className="absolute inset-0 pointer-events-none border-2 border-slate-500 opacity-20 translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-300 ease-out -z-10"></div>
                <div className="overflow-hidden">
                  <Image
                    className="w-full h-full object-contain group-hover:scale-105 transition duration-700 ease-out"
                    src={FeaturesImage03}
                    alt="News 03"
                  />
                </div>
                <div className="w-16 h-16 absolute bg-gradient-to-b from-blue-500 to-blue-600 rounded-full -top-8 left-8">
                  <svg
                    className="w-16 h-16 fill-current"
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path className="text-white" d="..." />
                  </svg>
                </div>
              </a>
              <h3 className="h4 font-roboto mb-2">
                <a
                  className="text-slate-800 text-lg hover:underline hover:decoration-blue-100"
                  href="#0"
                >
                  AI Chat Support
                </a>
              </h3>
              <p className="text-md text-slate-500">
                Our AI-powered chatbots provide seamless customer support at
                scale...
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
