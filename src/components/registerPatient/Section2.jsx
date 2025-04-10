"use client";

import React, { useState } from "react";

const page = () => {
  const [fromType, setFromType] = useState("text");
  const [toType, setToType] = useState("text");
  const [showMoreDetails, setShowMoreDetails] = useState(false);

  return (
    <>
      <div className=" w-full mt-2 bg-white rounded-[15px] ">
        <div className="w-full flex flex-col items-center bg-white border-b border-[#BBBBBB] md:mt-12">
          <h1 className="text-[24px] md:text-[30px] xl:text-[40px] font-semibold text-black">
            Book your Service
          </h1>
          <p className="text-[14px] text-[#333333] pb-[14px] text-center px-16">
            Please register your service requirement here, in detail
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="sm:px-8 text-[14px] text-black font-light flex flex-col gap-4">
            <input
              type="text"
              placeholder="Patient Name"
              className="sm:w-[328px] h-[40px] text-[14px] text-black font-light border border-[#BBBBBB] rounded-[15px] ps-[32px] mt-[24px] outline-none placeholder:text-black"
            />
            <div className="flex gap-1">
              <select
                name=""
                id=""
                className="w-[160px] h-[40px] rounded-[15px] border border-[#BBBBBB] ps-[32px]"
              >
                <option value="" selected disabled>
                  Gender
                </option>
              </select>
              <select
                name=""
                id=""
                className="w-[160px] h-[40px] rounded-[15px] border border-[#BBBBBB] ps-[32px]"
              >
                <option value="" selected disabled>
                  Age
                </option>
                <option value="">1</option>
              </select>
            </div>
            <div className="flex gap-1">
              <select
                name=""
                id=""
                className="w-[160px] h-[40px] rounded-[15px] border border-[#BBBBBB] ps-[32px]"
              >
                <option value="" selected disabled>
                  Height (CM)
                </option>
              </select>
              <select
                name=""
                id=""
                className="w-[160px] h-[40px] rounded-[15px] border border-[#BBBBBB] ps-[32px]"
              >
                <option value="" selected disabled>
                  Weight (Kg)
                </option>
                <option value="">1</option>
              </select>
            </div>
            <input
              type="text"
              placeholder=" Diagnosis"
              className="sm:w-[328px] h-[40px] text-[14px] text-black font-light border border-[#BBBBBB] rounded-[15px] ps-[32px] outline-none placeholder:text-black"
            />
            <select
              name=""
              id=""
              className="sm:w-[328px] h-[40px] rounded-[15px] border border-[#BBBBBB] ps-[32px]"
            >
              <option value="" selected disabled>
                Current Health Status / Activity
              </option>
            </select>
            <select
              name=""
              id=""
              className="sm:w-[328px] h-[40px] rounded-[15px] border border-[#BBBBBB] ps-[32px]"
            >
              <option value="" selected disabled>
                Now Patient stayed at
              </option>
            </select>
            <textarea
              name=""
              id=""
              placeholder="Residential Address with PIN"
              className="sm:w-[328px] h-[96px] rounded-[15px] border border-[#BBBBBB] ps-[32px]  placeholder:text-black py-2"
            ></textarea>
            <input
              type="text"
              placeholder="Contact Person (Relative) Name"
              className="sm:w-[328px] h-[40px] text-[14px] text-black font-light border border-[#BBBBBB] rounded-[15px] ps-[32px]  outline-none placeholder:text-black"
            />
            <select
              name=""
              id=""
              className="sm:w-[328px] h-[40px] rounded-[15px] border border-[#BBBBBB] ps-[32px]"
            >
              <option value="" selected disabled>
                Relationship with patient
              </option>
              <option value="">1</option>
            </select>
            <input
              type="text"
              placeholder="Email ID"
              className="sm:w-[328px] h-[40px] text-[14px] text-black font-light border border-[#BBBBBB] rounded-[15px] ps-[32px] outline-none placeholder:text-black"
            />
            <input
              type="text"
              placeholder="Mobile Number"
              className="sm:w-[328px] h-[40px] text-[14px] text-black font-light border border-[#BBBBBB] rounded-[15px] ps-[32px] outline-none placeholder:text-black"
            />
            <button className="w-[328px] h-[40px] font-semibold text-[14px] bg-[#3674B5] text-white rounded-[15px] flex justify-center items-center mt-2">
              Request OTP
            </button>
          </div>

          <div className=" text-[14px] text-black font-light flex flex-col gap-4 mt-4">
            <h1 className="text-[16px] font-semibold text-black">
              Verification
            </h1>
            <input
              type="number"
              className="w-[328px] h-[40px] text-black text-[12px] md:text-[14px] font-light border-[1px] border-[#BBBBBB] placeholder:text-black outline-none rounded-[15px] ps-8 pe-4 "
              placeholder="OTP"
            />
            <button className="w-[328px] h-[40px] bg-[#3674B5] text-white rounded-[15px] flex justify-center items-center">
              Verify
            </button>
          </div>

          {/* <div className="w-[328px]  text-[14px] text-black font-light flex flex-col gap-4 mt-8">
            <h1 className="font-semibold text-[20px]">
              Ready to add more details?
            </h1>

            <div className="flex gap-5">
              <button className="w-[144px] h-[40px] rounded-[15px] border border-[#BBBBBB] ">
                Yes, Proceed
              </button>
              <button className="w-[144px] h-[40px] rounded-[15px] border border-[#BBBBBB] ">
                Later, Please
              </button>
            </div>
          </div> */}
          {!showMoreDetails && (
            <>
              {/* everything from the start until the "Ready to add more details?" section */}
              <div className="w-[328px]  text-[14px] text-black font-light flex flex-col gap-4 my-8">
                <h1 className="font-semibold text-[20px]">
                  Ready to add more details?
                </h1>
                <div className="flex gap-5">
                  <button
                    onClick={() => setShowMoreDetails(true)}
                    className="w-[144px] h-[40px] rounded-[15px] border border-[#BBBBBB]"
                  >
                    Yes, Proceed
                  </button>
                  <button className="w-[144px] h-[40px] rounded-[15px] border border-[#BBBBBB]">
                    Later, Please
                  </button>
                </div>
              </div>
            </>
          )}

          {showMoreDetails && (
            <>
              {/* everything from "Preferred Language (Communication with Staff)" onward */}

              <div className="flex flex-col gap-4 w-[328px]">
                <h1 className="text-[16px] font-semibold text-black  mt-[20px]">
                  Preferred Language (Communication with Staff)
                </h1>
                <div className="flex gap-4  text-black font-light">
                  <div className="flex gap-2">
                    <input type="checkbox" name="" id="" />
                    Hindi
                  </div>
                  <div className="flex gap-2">
                    <input type="checkbox" name="" id="" />
                    Kannada
                  </div>
                  <div className="flex gap-2">
                    <input type="checkbox" name="" id="" />
                    English
                  </div>
                </div>
                <div className="flex gap-4  text-black mt-2 font-light">
                  <div className="flex gap-2">
                    <input type="checkbox" name="" id="" />
                    Malayalam
                  </div>
                  <div className="flex gap-2">
                    <input type="checkbox" name="" id="" />
                    Tamil
                  </div>
                  <div className="flex gap-2">
                    <input type="checkbox" name="" id="" />
                    Telugu
                  </div>
                </div>
              </div>

              <div className="w-[328px] flex flex-col gap-4">
                <h1 className="text-[16px] font-semibold text-black  mt-[20px]">
                  Service Details
                </h1>
                <div className="flex flex-col  gap-4">
                  <select
                    name=""
                    id=""
                    className="w-[328px] h-[40px] rounded-[15px] border border-[#BBBBBB] ps-[32px] text-black font-light text-[14px]"
                  >
                    <option value="" selected disabled>
                      Service Required
                    </option>
                    <option value="">1</option>
                  </select>
                  <select
                    name=""
                    id=""
                    className="w-[328px] h-[40px] rounded-[15px] border border-[#BBBBBB] ps-[32px] text-black font-light text-[14px]"
                  >
                    <option value="" selected disabled>
                      Daily Schedule
                    </option>
                    <option value="">1</option>
                  </select>

                  <input
                    type={fromType}
                    placeholder="Service Period (From)"
                    onFocus={() => setFromType("date")}
                    onBlur={(e) => {
                      if (!e.target.value) setFromType("text");
                    }}
                    className="w-[328px] h-[40px] text-[14px] text-black font-light border border-[#BBBBBB] rounded-[15px] ps-[32px] outline-none placeholder:text-black"
                  />

                  <input
                    type={toType}
                    placeholder="Service Period (To)"
                    onFocus={() => setToType("date")}
                    onBlur={(e) => {
                      if (!e.target.value) setToType("text");
                    }}
                    className="w-[328px] h-[40px] text-[14px] text-black font-light border border-[#BBBBBB] rounded-[15px] ps-[32px] outline-none placeholder:text-black"
                  />
                </div>
              </div>
              <div className="w-[328px] flex flex-col gap-4">
                <h1 className="text-[16px] font-semibold text-black mt-[20px]">
                  Preferred Staff
                </h1>
                <select
                  name=""
                  id=""
                  className="w-[328px] h-[40px] rounded-[15px] border border-[#BBBBBB] ps-[32px] text-black font-light text-[14px]"
                >
                  <option value="" selected disabled>
                    Male / Female
                  </option>
                  <option value="">Male</option>
                  <option value="">Female</option>
                </select>
              </div>
              <button className="w-[328px] h-[40px] bg-[#3674B5] text-white rounded-[15px] flex justify-center items-center  mt-4">
                Upload
              </button>

              <div>
                <p className=" w-[328px] text-[14px] text-[#3674B5] font-semibold  pt-4 mb-[40px] md:mb-[200px]">
                  Thank you !<br />
                  The Entry has been successfully submitted !<br />
                  Our Team will get back to you soon.
                  <br />
                </p>
              </div>
            </>
          )}

          {/* 
          <div className="flex flex-col gap-4 w-[328px]">
            <h1 className="text-[16px] font-semibold text-black  mt-[20px]">
              Preferred Language (Communication with Staff)
            </h1>
            <div className="flex gap-4  text-black font-light">
              <div className="flex gap-2">
                <input type="checkbox" name="" id="" />
                Hindi
              </div>
              <div className="flex gap-2">
                <input type="checkbox" name="" id="" />
                Kannada
              </div>
              <div className="flex gap-2">
                <input type="checkbox" name="" id="" />
                English
              </div>
            </div>
            <div className="flex gap-4  text-black mt-2 font-light">
              <div className="flex gap-2">
                <input type="checkbox" name="" id="" />
                Malayalam
              </div>
              <div className="flex gap-2">
                <input type="checkbox" name="" id="" />
                Tamil
              </div>
              <div className="flex gap-2">
                <input type="checkbox" name="" id="" />
                Telugu
              </div>
            </div>
          </div>

          <div className="w-[328px] flex flex-col gap-4">
            <h1 className="text-[16px] font-semibold text-black  mt-[20px]">
              Service Details
            </h1>
            <div className="flex flex-col  gap-4">
              <select
                name=""
                id=""
                className="w-[328px] h-[40px] rounded-[15px] border border-[#BBBBBB] ps-[32px] text-black font-light text-[14px]"
              >
                <option value="" selected disabled>
                  Service Required
                </option>
                <option value="">1</option>
              </select>
              <select
                name=""
                id=""
                className="w-[328px] h-[40px] rounded-[15px] border border-[#BBBBBB] ps-[32px] text-black font-light text-[14px]"
              >
                <option value="" selected disabled>
                  Daily Schedule
                </option>
                <option value="">1</option>
              </select>

              <input
                type={fromType}
                placeholder="Service Period (From)"
                onFocus={() => setFromType("date")}
                onBlur={(e) => {
                  if (!e.target.value) setFromType("text");
                }}
                className="w-[328px] h-[40px] text-[14px] text-black font-light border border-[#BBBBBB] rounded-[15px] ps-[32px] outline-none placeholder:text-black"
              />

              <input
                type={toType}
                placeholder="Service Period (To)"
                onFocus={() => setToType("date")}
                onBlur={(e) => {
                  if (!e.target.value) setToType("text");
                }}
                className="w-[328px] h-[40px] text-[14px] text-black font-light border border-[#BBBBBB] rounded-[15px] ps-[32px] outline-none placeholder:text-black"
              />
            </div>
          </div>
          <div className="w-[328px] flex flex-col gap-4">
            <h1 className="text-[16px] font-semibold text-black mt-[20px]">
              Preferred Staff
            </h1>
            <select
              name=""
              id=""
              className="w-[328px] h-[40px] rounded-[15px] border border-[#BBBBBB] ps-[32px] text-black font-light text-[14px]"
            >
              <option value="" selected disabled>
                Male / Female
              </option>
              <option value="">Male</option>
              <option value="">Female</option>
            </select>
          </div>
          <button className="w-[328px] h-[40px] bg-[#3674B5] text-white rounded-[15px] flex justify-center items-center  mt-4">
            Upload
          </button>

          <div>
            <p className=" w-[328px] text-[14px] text-[#3674B5] font-semibold  pt-4 mb-[40px] md:mb-[200px]">
              Thank you !<br />
              The Entry has been successfully submitted !<br />
              Our Team will get back to you soon.
              <br />
            </p>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default page;
