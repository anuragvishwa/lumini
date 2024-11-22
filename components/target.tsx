import Image from "next/image";
import TargetImage from "@/public/images/target.png";
import "./button.css";
import Link from "next/link";

export default function Target() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-slate-200">
          {/* Section header */}

          {/* Section content */}
          <div className="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row md:items-center md:space-x-8 lg:space-x-16 xl:space-x-18 space-y-8 space-y-reverse md:space-y-0">
            {/* Content */}

            {/* Image */}
            <div className="md:w-5/12 lg:w-1/2" data-aos="fade-left">
              <Image
                className="mx-auto md:max-w-none"
                src={TargetImage}
                width={540}
                height={540}
                alt="Target"
              />
            </div>
            <div
              className="md:w-7/12 lg:w-1/2 order-1 md:order-none"
              data-aos="fade-right"
            >
              <div className="max-w-4xl mx-auto text-left pb-6">
                <h2 className="h2 font-roboto">
                  All personal data is protected and secure
                </h2>
                <p className="mt-4 text-slate-500">
                  We maintain the highest standards of data security and
                  protection in compliance with GDPR and CCPA.
                </p>
              </div>
              <Link className="button" href="https://app.lumniverse.com">
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
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
