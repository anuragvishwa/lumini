import Image from "next/image";
import lumniverse from "./Colorful Mascot Illustrative Online Shop Logo.png";

export default function FeaturesBlocks() {
  return (
    <section className="bg-slate-900">
      <div className="max-w-6xl font-roboto text-white  mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-roboto text-white">
              Connect with your fave Shopify apps
            </h2>
            <p className="my-4">
              Lumniverse brings AI “wicked smarts” to your favorite tools such
              as Zendesk, Gorgias, Klaviyo, Yotpo and more. Whether it’s email,
              live chat, or support platforms, we've got you covered.
            </p>
          </div>

          {/* Items */}
          <div
            className="relative max-w-sm mx-auto grid gap-16 md:grid-cols-2 lg:grid-cols-2 lg:gap-y-20 items-start md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks
          >
            {/* Lines decoration */}
            <div
              className="absolute inset-0 -my-8 md:-my-12 pointer-events-none hidden"
              aria-hidden="true"
            >
              <div className="h-full w-full border-l last:border-r odd:hidden lg:odd:block border-slate-100"></div>
              <div className="h-full w-full border-l last:border-r odd:hidden lg:odd:block border-slate-100"></div>
              <div className="h-full w-full border-l last:border-r odd:hidden lg:odd:block border-slate-100"></div>
              <div className="h-full w-full border-l last:border-r odd:hidden lg:odd:block border-slate-100"></div>
            </div>

            {/* 1st item */}
            <div
              className="relative pl-6 border-l-0"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-red-500"></div>
              <h3 className="h4 font-roboto mb-2">Seamless Workflow</h3>
              <p className="text-lg text-slate-500">
                Requires zero changes to your support stack — Rep adapts to your
                tools and workflow.
              </p>
            </div>

            {/* 2nd item */}
            <div
              className="relative pl-6 border-l-0"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-red-500"></div>
              <h3 className="h4 font-roboto mb-2">AI-Powered Tickets</h3>
              <p className="text-lg text-slate-500">
                Handle 99% of all tickets with your live chat solution plus AI.
                Why leave anything to chance?
              </p>
            </div>

            {/* 3rd item */}
            <div
              className="relative pl-6 border-l-0"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-red-500"></div>
              <h3 className="h4 font-roboto mb-2">Automated Tools</h3>
              <p className="text-lg text-slate-500">
                Capture emails and phone numbers on autopilot with your favorite
                marketing platform.
              </p>
            </div>

            {/* 4th item */}
            <div
              className="relative pl-6 border-l-0"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-red-500"></div>
              <h3 className="h4 font-roboto mb-2">
                Seamless App Integration – Just Ask!
              </h3>
              <p className="text-lg text-slate-500">
                Have an app you want to integrate with? Just let us know and
                we’ll make it happen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
