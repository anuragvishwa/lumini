// import React from "react";

// const WorkAIPlatform = () => {
//   return (
//     <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center lg:items-start justify-between min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 p-8">
//       <div className="text-white max-w-lg mb-8 lg:mb-0 lg:mr-8">
//         <h1 className="text-4xl lg:text-5xl font-bold mb-6">
//           The Work AI platform for quickly & securely bringing AI into the
//           enterprise.
//         </h1>
//         <button className="bg-lime-300 text-blue-900 font-semibold py-3 px-6 rounded-lg shadow hover:bg-lime-400">
//           See product overview
//         </button>
//       </div>

//       {/* <div className="flex space-x-4 mt-8 lg:mt-0">
//         <div className="bg-blue-800 text-white p-4 rounded-lg shadow flex flex-col items-center">
//           <div className="text-2xl mb-2">🌟</div>
//           <span className="font-semibold">Glean Assistant</span>
//         </div>
//         <div className="bg-blue-800 text-white p-4 rounded-lg shadow flex flex-col items-center">
//           <div className="text-2xl mb-2">✨</div>
//           <span className="font-semibold">Glean Apps</span>
//         </div>
//         <div className="bg-blue-800 text-white p-4 rounded-lg shadow flex flex-col items-center">
//           <div className="text-2xl mb-2">💠</div>
//           <span className="font-semibold">Your apps</span>
//         </div>
//       </div> */}

//       <div className="bg-gradient-to-b from-lime-100 via-lime-200 to-blue-200 p-6 rounded-lg shadow-lg max-w-sm w-full">
//         <h2 className="text-center text-2xl font-bold text-blue-900 mb-6">
//           Glean Work AI Platform
//         </h2>
//         <div className="space-y-4">
//           <button className="w-full bg-white text-gray-900 font-semibold py-2 px-4 rounded-lg shadow hover:bg-gray-100">
//             GenAI engine
//           </button>
//           <button className="w-full bg-white text-gray-900 font-semibold py-2 px-4 rounded-lg shadow hover:bg-gray-100">
//             AI-powered search
//           </button>
//           <button className="w-full bg-white text-gray-900 font-semibold py-2 px-4 rounded-lg shadow hover:bg-gray-100">
//             Security & governance
//           </button>
//         </div>
//       </div>

//       {/* Icon Buttons Section */}
//     </div>
//   );
// };

// export default WorkAIPlatform;

import Image from "next/image";
import FeaturesImage01 from "./AI-Train.png";

export default function FeaturesHome03() {
  return (
    <section className="relative font-roboto">
      {/* Dark background */}
      <div
        className="absolute inset-0 bg-slate-900 pointer-events-none -z-10 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700"
        aria-hidden="true"
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-20 md:pt-40 md:pb-44">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
            {/* Left Section */}
            <div className="text-white max-w-lg mb-8 lg:mb-0 lg:mr-8">
              <h2 className="h2 font-roboto text-white">
                The Work AI platform for quickly & securely bringing AI into the
                enterprise.
              </h2>
              {/* <button className="bg-lime-300 text-blue-900 font-semibold py-3 px-6 rounded-lg shadow hover:bg-lime-400">
                See product overview
              </button> */}
            </div>

            {/* Right Section */}
            <div>
              <div className="mt-4 bg-blue-800 text-white p-4 rounded-lg shadow flex flex-col items-center w-full">
                <span className="font-semibold">Prompt Library</span>
              </div>
              <div className="mb-4 flex items-center gap-4 w-full justify-between">
                <div className="mt-4 bg-blue-800 text-white p-4 rounded-lg shadow flex flex-col items-center w-full">
                  <span className="font-semibold text-xs">Lumi Assistant</span>
                </div>
                <div className="mt-4 bg-blue-800 text-white p-4 rounded-lg shadow flex flex-col items-center w-full">
                  <span className="font-semibold text-xs">Lumi Apps</span>
                </div>
                <div className="mt-4 bg-blue-800 text-white p-4 rounded-lg shadow flex flex-col items-center w-full">
                  <span className="font-semibold text-xs">Your Apps</span>
                </div>
              </div>
              <div className="bg-gradient-to-b from-lime-100 via-lime-200 to-blue-200 p-6 rounded-lg shadow-lg max-w-sm w-full">
                <h2 className="text-center text-2xl font-bold text-blue-900 mb-6">
                  Lumniverse Work AI Platform
                </h2>
                <div className="space-y-4">
                  <button className="w-full bg-white text-gray-900 font-semibold py-2 px-4 rounded-lg shadow hover:bg-gray-100">
                    GenAI engine
                  </button>
                  <button className="w-full bg-white text-gray-900 font-semibold py-2 px-4 rounded-lg shadow hover:bg-gray-100">
                    AI-powered search
                  </button>
                  <button className="w-full bg-white text-gray-900 font-semibold py-2 px-4 rounded-lg shadow hover:bg-gray-100">
                    Security & governance
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-4 w-full justify-between">
                <div className="mt-4 bg-blue-800 text-white p-2 rounded-lg shadow flex flex-col items-center w-full">
                  <span className="font-semibold">Your Datasources</span>
                </div>
                <div className="mt-4 bg-blue-800 text-white p-2 rounded-lg shadow flex flex-col items-center w-full">
                  <span className="font-semibold">Your Cloud</span>
                </div>
              </div>
            </div>
            {/* Icon Buttons Section */}
            {/* <div className="flex space-x-4 mt-8 lg:mt-0">
              <div className="bg-blue-800 text-white p-4 rounded-lg shadow flex flex-col items-center">
                <div className="text-2xl mb-2">🌟</div>
                <span className="font-semibold">Glean Assistant</span>
              </div>
              <div className="bg-blue-800 text-white p-4 rounded-lg shadow flex flex-col items-center">
                <div className="text-2xl mb-2">✨</div>
                <span className="font-semibold">Glean Apps</span>
              </div>
              <div className="bg-blue-800 text-white p-4 rounded-lg shadow flex flex-col items-center">
                <div className="text-2xl mb-2">💠</div>
                <span className="font-semibold">Your apps</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
