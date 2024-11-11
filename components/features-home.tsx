"use client";

import { useState } from "react";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import FeaturesImage from "@/public/images/features-home-01.jpg";
import laptop from "./laptop.png";

export default function FeaturesHome() {
  const [tab, setTab] = useState<number>(1);

  return (
    <section className="relative">
      <div
        className="absolute inset-0 bg-slate-100 pointer-events-none mb-64 md:mb-80"
        aria-hidden="true"
      ></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 className="h2 font-playfair-display text-slate-800 mb-4">
              Test drive Lumniverse in a safe demo environment
            </h2>
            <p className="text-xl text-slate-768">
              See how AI actually behaves with your product catalog before you
              commit to a 30-day FREE trial.
            </p>
          </div>
          <div className="flex mb-4 justify-center">
            <button className="button">
              <span className="button__icon-wrapper">
                <svg
                  viewBox="0 0 14 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="button__icon-svg"
                  width="10"
                >
                  <path
                    d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                    fill="currentColor"
                  ></path>
                </svg>

                <svg
                  viewBox="0 0 14 15"
                  fill="none"
                  width="10"
                  xmlns="http://www.w3.org/2000/svg"
                  className="button__icon-svg button__icon-svg--copy"
                >
                  <path
                    d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
              Start Free Trial
            </button>
          </div>

          <Image src={laptop} alt="laptop" />
        </div>
      </div>
    </section>
  );
}