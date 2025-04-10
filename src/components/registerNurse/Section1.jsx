import React from "react";

function Section1() {
  return (
    <div className="flex flex-col-reverse md:flex-row md:px-[20px] xl:px-[80px] 2xl:px-[195px] ">
      <div className="md:w-[50%] xl:w-[46%] 2xl:w-[48%] md:pe-[131px] ">
        <h1 className="text-[24px] md:text-[34px] xl:text-[56px] text-[#333333]  leading-[120%] md:mt-[224px] text-center md:text-left py-2">
          Find Jobs
          <br />
          in Healthcare
        </h1>
        <p className="text-[14px] md:text-[18px] xl:text-[24px] text-[#333333] leading-[140%] md:pt-[14px] font-light text-center md:text-left px-[46px] md:px-0 ">
          Join Mediqx to get matched with full-time, part-time, and freelance
          healthcare opportunities near you. Register in minutes and start
          earning.
        </p>
        <div className="w-full flex flex-col px-[14px] md:px-0 gap-[11px] mt-[14px] md:mt-[50px]">
          <p className="text-[14px] md:text-[18px] xl:text-[24px] text-[#999999] leading-[140%]   text-center md:text-left px-[46px] md:px-0 ">
            Support
          </p>
          <p className="text-[14px] md:text-[18px] xl:text-[24px] text-[#333333] leading-[140%] md:pt-[14px] text-center md:text-left px-[46px] md:px-0 ">
            91 - 8800 145 245
          </p>
        </div>
      </div>
      <div className="md:w-[50%] xl:w-[54%] bg-[#196BA5] flex justify-center md:relative pt-24 xl:mt-0 ">
        <img
          className="md:absolute -left-17 bottom-0 h-[219px] sm:h-[300px] md:h-[410px] xl:h-auto"
          src="/doctor.svg"
        ></img>
      </div>
    </div>
  );
}

export default Section1;
