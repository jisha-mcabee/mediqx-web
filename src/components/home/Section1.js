// import React from "react";

// function Section1() {
//   return (
//     <div className="flex flex-col-reverse md:flex-row md:px-[20px] xl:px-[80px] 2xl:px-[195px]">
//       <div className="md:w-[50%] xl:w-[46%] 2xl:w-[48%] md:pe-[131px]">
//         <h1 className="text-[24px] md:text-[34px] xl:text-[56px] text-[#333333] font-medium leading-[120%] md:mt-[224px] text-center md:text-left py-2">
//           Find Jobs
//           <br />
//           in Healthcare
//         </h1>
//         <p className="text-[14px] md:text-[18px] xl:text-[24px] text-[#333333] leading-[140%] md:pt-[14px] font-light text-center md:text-left px-[46px] md:px-0 ">
//           Join Mediqx to get matched with full-time, part-time, and freelance
//           healthcare opportunities near you. Register in minutes and start
//           earning.
//         </p>
//         <div className="w-full px-4 md:px-0">
//         <button className="bg-[#196BA5] text-[#FFFFFF] text-[14px] md:text-[16px] w-full md:w-[328px] h-[48px] md:h-[56px] rounded-[10px] mt-3 md:mt-[45px] ">
//           Register as a Healthcare Professional
//         </button>
//         <div className="flex gap-2 mt-4">
//         <div className="size-[12px] rounded-full bg-[#196BA5] "></div>
//         <div className="size-[12px] rounded-full bg-[#D9D9D9] "></div>

//       </div>
//         </div>
//       </div>
//       <div className="md:w-[50%] xl:w-[54%] bg-[#196BA5] flex justify-center md:relative pt-24 xl:mt-0 ">
//         <img
//           className="md:absolute -left-17 bottom-0 h-[219px] sm:h-[300px] md:h-[410px] xl:h-auto"
//           src="/doctor.svg"
//         ></img>
//       </div>

//        <div className="md:w-[50%] xl:w-[46%] 2xl:w-[48%] md:pe-[131px] ">
//         <h1 className="text-[24px] md:text-[34px] xl:text-[56px] text-[#333333] font-medium leading-[120%] md:mt-[224px] text-center md:text-left py-2">
//           Nursing Care
//           <br />
//           at your home
//         </h1>
//         <p className="text-[14px] md:text-[18px] xl:text-[24px] text-[#333333] leading-[140%] md:pt-[14px] font-light text-center md:text-left px-[46px] md:px-0 ">
//           Get professional nursing care at your doorstep — whether it’s a quick
//           visit or a 24-hour support. Mediqx connects you with licensed
//           healthcare professionals for safe, personalized care in the comfort of
//           your home.
//         </p>
//         <div className="w-full px-4 md:px-0">
//         <button className="bg-[#196BA5] text-[#FFFFFF] text-[14px] md:text-[16px] w-full md:w-[328px] h-[48px] md:h-[56px] rounded-[10px] mt-3 md:mt-[45px] ">
//           Register as a Healthcare Professional
//         </button>

//         <div className="flex gap-2 mt-4">
//         <div className="size-[12px] rounded-full bg-[#196BA5] "></div>
//         <div className="size-[12px] rounded-full bg-[#D9D9D9] "></div>

//       </div>
//         </div>
//       </div>
//       <div className="md:w-[50%] xl:w-[54%] bg-[#196BA5] flex justify-center md:relative pt-24 xl:mt-0 ">
//         <img
//           className="md:absolute -left-17 bottom-0 h-[219px] sm:h-[300px] md:h-[410px] xl:h-auto"
//           src="/old-man.svg"
//         ></img>
//       </div>

//     </div>
//   );
// }

// export default Section1;

"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const slides = [
  {
    title: "Find Jobs\nin Healthcare",
    description:
      "Join Mediqx to get matched with full-time, part-time, and freelance healthcare opportunities near you. Register in minutes and start earning.",
    buttonText: "Register as a Healthcare Professional",
    buttonLink: "/registerNurse",
    img: "/doctor.svg",
  },
  {
    title: "Nursing Care\nat your home",
    description:
      "Get professional nursing care at your doorstep — whether it’s a quick visit or a 24-hour support. Mediqx connects you with licensed healthcare professionals for safe, personalized care in the comfort of your home.",
    buttonText: "Book Your Service",
    buttonLink: "/registerPatient",
    img: "/old-man.svg",
  },
];

function Section1() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const handleButtonClick = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-all duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full flex flex-col-reverse md:flex-row md:px-[20px] xl:px-[80px] 2xl:px-[195px]"
          >
            {/* LEFT TEXT SIDE */}
            <div className="md:w-[50%] xl:w-[56%] 2xl:w-[54%] md:pe-[131px]">
              <h1 className="whitespace-pre-line text-[24px] md:text-[34px] xl:text-[56px] text-[#333333] font-medium leading-[120%] md:mt-[224px] text-center md:text-left py-2">
                {slide.title}
              </h1>
              <p className="text-[14px] md:text-[18px] xl:text-[24px] text-[#333333] leading-[140%] md:pt-[14px] font-light text-center md:text-left px-[46px] md:px-0 ">
                {slide.description}
              </p>
              <div className="w-full px-4 md:px-0">
                <Link href={slide.buttonLink}>
                  <button
                    onClick={handleButtonClick}
                    className="bg-[#196BA5] text-[#FFFFFF] text-[14px] md:text-[16px] w-full md:w-[328px] h-[48px] md:h-[56px] rounded-[10px] mt-3 md:mt-[45px] cursor-pointer"
                  >
                    {slide.buttonText}
                  </button>
                </Link>
              </div>
            </div>

            {/* RIGHT IMAGE SIDE */}
            <div className="md:w-[50%]  2xl:w-[46%] bg-[#196BA5] flex justify-center md:relative pt-24 xl:mt-0">
              <img
                className="md:absolute -left-17 bottom-0 h-[219px] sm:h-[300px] md:h-[410px] xl:h-auto"
                src={slide.img}
                alt="Slide"
              />
            </div>
          </div>
        ))}
      </div>

      {/* DOT INDICATORS */}
      <div className="flex  mt-6 gap-2 justify-center md:justify-start  md:px-[20px] xl:px-[80px] 2xl:px-[195px]">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)}
            className={`size-[8px] sm:size-[12px] rounded-full cursor-pointer transition-colors duration-300 ${
              currentSlide === index ? "bg-[#196BA5]" : "bg-[#D9D9D9]"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Section1;
