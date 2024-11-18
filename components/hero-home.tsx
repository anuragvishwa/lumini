import Link from "next/link";
import aichat from "../public/images/ai-chat.svg";
import mobileChat from "../public/images/mobile-chat.svg";
import emoji from "../public/images/emoji.svg";
import Image from "next/image";

export default function HeroHome() {
  return (
    <section className="relative bg-slate-900">
      <div
        className="absolute inset-0 bg-gradient-to-r from-slate-900 via-pink-500 to-red-500 pointer-events-none -z-10"
        aria-hidden="true"
      ></div>

      <div className="relative max-w-full mx-auto px-4 sm:px-6">
        <div className="pt-32 md:pb-44 relative">
          <div className="hidden sm:flex sm:absolute top-[30%] left-4 md:left-10 lg:left-20 z-10">
            <div className="rounded-lg p-6">
              <Image
                src={mobileChat}
                alt="Decorative Left"
                className="rounded-lg"
                width={150}
                height={150}
              />
            </div>
          </div>
          <div className="hidden sm:flex sm:absolute top-[40%] right-4 md:right-10 lg:right-20 z-10">
            <div className="rounded-lg p-6">
              <Image
                src={emoji}
                alt="Decorative Right"
                className="rounded-lg"
                width={150}
                height={150}
              />
            </div>
          </div>

          <div className="text-center pb-10 font-roboto" data-aos="fade-right">
            <h1 className="h1 font-roboto text-slate-100 mb-4">
              AI Chat for Sales and Support
            </h1>
            <p className="text-xl text-slate-400 mb-8">
              AI Concierge That Engages, Supports, and Converts Shoppers at
              Every Stage
            </p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div>
                <Link
                  className="btn rounded-full text-white bg-blue-600 hover:bg-blue-700 w-full group"
                  href="https://app.lumniverse.com"
                >
                  Start your services
                  <span className="tracking-normal text-pink-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1"></span>
                </Link>
              </div>
              <div>
                <Link
                  className="btn text-white bg-slate-700 hover:bg-slate-800 w-full rounded-full"
                  href="https://app.lumniverse.com/simulator"
                >
                  Try Simulator
                </Link>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Image src={aichat} alt="aichat" width={540} height={405} />
          </div>
        </div>
      </div>
    </section>
  );
}
