import Image from "next/image";
import lumniverse from "./Colorful Mascot Illustrative Online Shop Logo.png";
import "./gradient-cards.css";

export default function GradientCards() {
  return (
    <section className="bg-slate-900">
      <div className="max-w-6xl font-roboto text-white  mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-roboto text-white">
              Lumi saves up to
              <span className="mx-2 bg-gradient-to-b from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                110
              </span>
              hours per user/year
            </h2>
          </div>

          <div className="py-8 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 max-w-7xl mx-auto">
              <div className="relative">
                <div className="animate-rgb-background absolute inset-0 rounded-lg blur-lg"></div>
                <div className="bg-black relative rounded-lg p-6 text-center text-white h-full flex flex-col justify-between">
                  <h3 className="font-semibold mb-2">Glean adoption reached</h3>
                  <p className="text-5xl font-bold text-lime-300">93%</p>
                  <p className="mt-2">within 2 years</p>
                </div>
              </div>

              <div className="relative">
                <div className="animate-rgb-background absolute inset-0 rounded-lg blur-lg"></div>
                <div className="bg-black relative rounded-lg p-6 text-center text-white h-full flex flex-col justify-between">
                  <h3 className="font-semibold mb-2">Glean saved</h3>
                  <p className="text-5xl font-bold text-lime-300">36</p>
                  <p className="mt-2">hours per employee on onboarding</p>
                </div>
              </div>

              <div className="relative">
                <div className="animate-rgb-background absolute inset-0 rounded-lg blur-lg"></div>
                <div className="bg-black relative rounded-lg p-6 text-center text-white h-full flex flex-col justify-between">
                  <h3 className="font-semibold mb-2">Glean Chat reduced</h3>
                  <p className="text-5xl font-bold text-lime-300">20%</p>
                  <p className="mt-2">
                    internal support requests (IT, HR, etc.)
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="animate-rgb-background absolute inset-0 rounded-lg blur-lg"></div>
                <div className="bg-black relative rounded-lg p-6 text-center text-white h-full flex flex-col justify-between">
                  <h3 className="font-semibold mb-2">Companies made back</h3>
                  <p className="text-5xl font-bold text-lime-300">6</p>
                  <p className="mt-2">months</p>
                </div>
              </div>
            </div>
          </div>

          {/* Items */}
        </div>
      </div>
    </section>
  );
}
