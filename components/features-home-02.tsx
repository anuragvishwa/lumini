"use client";

import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import FeaturesImage from "./chatbot.png";
import voiceAssist from "../app/(default)/voice-assistant.svg";
import support from "../app/(default)/support.svg";

export default function FeaturesHome02() {
  const [tab, setTab] = useState<number>(1);

  return (
    <section>
      <div className="max-w-6xl font-roboto mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-slate-200">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-roboto text-slate-700">
              Introducing your 24/7
            </h2>
          </div>
          {/* Section content */}
          <div className="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row md:items-start md:space-x-8 lg:space-x-16 xl:space-x-18 space-y-8 space-y-reverse md:space-y-0">
            {/* Tabs items (images) */}
            <div className="md:rtl md:w-5/12 lg:w-1/2 order-1 md:order-none">
              <div className="transition-all">
                <div className="relative flex flex-col" data-aos="fade-down">
                  {/* Item 1 */}
                  <Transition show={tab === 1}>
                    <div className="w-full text-left transition ease-in-out data-[closed]:opacity-0 data-[enter]:duration-700 data-[enter]:data-[closed]:-translate-y-16 data-[closed]:absolute data-[leave]:duration-300 data-[leave]:data-[closed]:translate-y-16">
                      <div className="relative inline-flex flex-col">
                        <div className="mb-8 text-center md:text-left">
                          <h3 className="h3 text-slate-700 font-roboto mb-3">
                            Behavioral AI Magic
                          </h3>
                          <p className="my-4">
                            Our Behavioral AI ‘senses’ when shoppers become
                            disengaged
                          </p>
                          <p className="text-sm text-slate-500">
                            Proprietary AI developed in-house
                          </p>{" "}
                          <p className="text-sm text-slate-500">
                            Accurately predicts drop-offs
                          </p>{" "}
                          <p className="text-sm text-slate-500">
                            Performs 4x better than standard exit-intent pop-ups
                          </p>
                        </div>
                      </div>
                      <Image
                        className="rounded relative inline-flex flex-col"
                        src={FeaturesImage}
                        width={360}
                        height={300}
                        alt="Features home 2 02"
                      />
                    </div>
                  </Transition>
                  {/* Item 2 */}
                  <Transition show={tab === 2}>
                    <div className="w-full text-left transition ease-in-out data-[closed]:opacity-0 data-[enter]:duration-700 data-[enter]:data-[closed]:-translate-y-16 data-[closed]:absolute data-[leave]:duration-300 data-[leave]:data-[closed]:translate-y-16">
                      <div className="mb-8 text-center md:text-left">
                        <h3 className="h3 text-slate-700 font-roboto mb-3">
                          Your own branded AI Concierge
                        </h3>
                        <p className="my-4">
                          The Concierge is ready to guide, advise & assist. It
                          can redirect to product pages, take shoppers to
                          checkout, and compare products. Oh! You can train the
                          AI, too.
                        </p>
                        <p className="text-sm text-slate-500">
                          Knows your catalog, products, and website
                        </p>{" "}
                        <p className="text-sm text-slate-500">
                          Speaks your unique brand voice & personality
                        </p>{" "}
                        <p className="text-sm text-slate-500">Multilingual</p>
                      </div>
                      <Image
                        className="rounded relative inline-flex flex-col"
                        src={voiceAssist}
                        width={360}
                        height={300}
                        alt="Features home 2 02"
                      />
                    </div>
                  </Transition>
                  {/* Item 3 */}
                  <Transition show={tab === 3}>
                    <div className="w-full text-left transition ease-in-out data-[closed]:opacity-0 data-[enter]:duration-700 data-[enter]:data-[closed]:-translate-y-16 data-[closed]:absolute data-[leave]:duration-300 data-[leave]:data-[closed]:translate-y-16">
                      <div className="mb-8 text-center md:text-left">
                        <h3 className="h3 text-slate-700 font-roboto mb-3">
                          Unlock AI-Generated Sales
                        </h3>
                        <p className="my-4">
                          Rep navigates to product pages & checkout—right
                          in-chat
                        </p>
                        <p className="text-sm text-slate-500">
                          Convert abandoned cart shoppers
                        </p>{" "}
                        <p className="text-sm text-slate-500">
                          Offer discounts in exchange for email and grow your
                          list
                        </p>{" "}
                        <p className="text-sm text-slate-500">
                          Increase AOV with AI product recommendations
                        </p>
                      </div>
                      <Image
                        className="rounded relative inline-flex flex-col"
                        src={support}
                        width={360}
                        height={300}
                        alt="Features home 2 02"
                      />
                    </div>
                  </Transition>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="md:w-7/12 lg:w-1/2" data-aos="fade-up">
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <button
                  className={`flex rounded-md items-start text-left bg-white border-2 px-5 py-3 rounded shadow-md transition duration-300 ease-in-out mb-3 ${
                    tab !== 1
                      ? "border-transparent opacity-50 hover:opacity-75"
                      : "border-2 border-blue-500 opacity-100"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(1);
                  }}
                >
                  <svg
                    className="w-4 h-4 fill-current text-blue-600 shrink-0 mt-1 mr-4"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.4 6.6c.8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.8-.8-5-7.8-5-7.8s7 4.2 7.8 5Z" />
                    <path d="M8 16c-4.4 0-8-3.6-8-8 0-.6.4-1 1-1s1 .4 1 1c0 3.3 2.7 6 6 6s6-2.7 6-6-2.7-6-6-6c-.6 0-1-.4-1-1s.4-1 1-1c4.4 0 8 3.6 8 8s-3.6 8-8 8Z" />
                  </svg>
                  <div>
                    <div className="text-slate-800 font-medium mb-1">
                      Convert browsers into buyers with precise timing
                    </div>
                    <div className="text-slate-500">
                      Our Behavioral AI ‘senses’ when shoppers become
                      disengaged, then proactively approaches them—sometimes
                      tripling conversions.
                    </div>
                  </div>
                </button>
                <button
                  className={`flex rounded-md items-start text-left bg-white border-2 px-5 py-3 rounded shadow-md transition duration-300 ease-in-out mb-3 ${
                    tab !== 2
                      ? "border-transparent opacity-50 hover:opacity-75"
                      : "border-2 border-blue-500 opacity-100"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(2);
                  }}
                >
                  <svg
                    className="w-4 h-4 fill-current text-blue-600 shrink-0 mt-1 mr-4"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4.019 15.276.034 1.329A1.058 1.058 0 0 1 1.33.034L15.276 4.02c.896.299.996 1.494.1 1.893L8.8 8.8l-2.79 6.574c-.498.897-1.693.797-1.992-.1ZM2.525 2.525l2.69 9.463 1.892-4.383c.1-.199.299-.398.498-.498l4.383-1.893-9.463-2.69Z" />
                  </svg>
                  <div>
                    <div className="text-slate-800 font-medium mb-1">
                      Assist & guide shoppers every step of the way
                    </div>
                    <div className="text-slate-500">
                      The Concierge is ready to guide, advise & assist. It can
                      redirect to product pages, take shoppers to checkout, and
                      compare products. Oh! You can train the AI, too.
                    </div>
                  </div>
                </button>
                <button
                  className={`flex rounded-md items-start text-left bg-white border-2 px-5 py-3 rounded shadow-md transition duration-300 ease-in-out mb-3 ${
                    tab !== 3
                      ? "border-transparent opacity-50 hover:opacity-75"
                      : "border-2 border-blue-500 opacity-100"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(3);
                  }}
                >
                  <svg
                    className="w-4 h-4 fill-current text-blue-600 shrink-0 mt-1 mr-4"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15.686 5.71 10.291.3c-.4-.4-.999-.4-1.399 0a.97.97 0 0 0 0 1.403l.6.6L2.698 6.01l-1-1.002c-.4-.4-.999-.4-1.398 0a.97.97 0 0 0 0 1.403l1.498 1.502 2.398 2.404L.6 14.023 2 15.425l3.696-3.706 3.997 4.007c.5.5 1.199.2 1.398 0a.97.97 0 0 0 0-1.402l-.999-1.002 3.697-6.711.6.6c.599.602 1.199.201 1.398 0 .3-.4.3-1.1-.1-1.502Zm-7.193 6.11L4.196 7.511l6.695-3.706 1.298 1.302-3.696 6.711Z" />
                  </svg>
                  <div>
                    <div className="text-slate-800 font-medium mb-1">
                      Sell while you sleep (or play, or work, or whatever)
                    </div>
                    <div className="text-slate-500">
                      Lumniverse navigates to product pages & checkout—right
                      in-chat. Collect email subscribers and build your list
                      with your fave Shopify apps.
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
