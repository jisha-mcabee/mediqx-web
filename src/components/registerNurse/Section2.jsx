import React from "react";

const Section2 = () => {
  return (
    <div className=" w-full mt-2 bg-white rounded-[15px] ">
      <div className="w-full flex flex-col items-center bg-white border-b border-[#BBBBBB] md:mt-12">
        <h1 className="text-[24px] md:text-[30px] xl:text-[40px] font-semibold text-black">
          Register
        </h1>
        <p className="text-[14px] text-[#333333] text-center pb-[14px]">
          Nurses, Paramedical professionals can register here
        </p>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="bg-white  mt-4 mb-6">
          <div className=" sm:px-[39px] pt-[15px]">
            <h1 className="text-[16px] font-semibold text-black px-[39px] py-[18px]">
              Basics
            </h1>
            <div className="flex flex-col gap-5 px-[39px]">
              <select
                name=""
                id=""
                className="sm:w-[280px] md:w-[328px] h-[40px] text-black text-[12px] md:text-[14px] font-light border-[1px] border-[#BBBBBB] rounded-[15px] px-2"
              >
                <option
                  value="Current Location"
                  selected
                  disabled
                  className="sm:w-[280px] md:w-[328px] h-[40px] text-black text-[12px] md:text-[14px] font-light border-[1px] border-[#BBBBBB]  rounded-[15px] px-2 outline-none"
                >
                  Current Location
                </option>
              </select>
              <select
                name=""
                id=""
                className="sm:w-[280px] md:w-[328px] h-[40px] text-black text-[12px] md:text-[14px] font-light border-[1px] border-[#BBBBBB] rounded-[15px] px-2"
              >
                <option
                  value="Current Location"
                  selected
                  disabled
                  className="sm:w-[280px] md:w-[328px] h-[40px] text-black text-[12px] md:text-[14px] font-light border-[1px] border-[#BBBBBB]  rounded-[15px] px-2 outline-none"
                >
                  Qualification
                </option>
              </select>
            </div>

            <h1 className="text-[16px] font-semibold text-black px-[39px] py-[18px]">
              Contact Details
            </h1>
            <div className="flex flex-col gap-5 px-[39px] mb-12">
              <input
                type="text"
                className="sm:w-[280px] md:w-[328px] h-[40px] text-black text-[12px] md:text-[14px] font-light border-[1px] border-[#BBBBBB] placeholder:text-black outline-none rounded-[15px] ps-3 md:ps-8 pe-4 "
                placeholder="Full Name"
              />
              <input
                type="email"
                className="sm:w-[280px] md:w-[328px] h-[40px] text-black text-[12px] md:text-[14px] font-light border-[1px] border-[#BBBBBB] placeholder:text-black outline-none rounded-[15px] ps-3 md:ps-8 pe-4 "
                placeholder="Email ID"
              />
              <input
                type="number"
                className="sm:w-[280px] md:w-[328px] h-[40px] text-black text-[12px] md:text-[14px] font-light border-[1px] border-[#BBBBBB] placeholder:text-black outline-none rounded-[15px] ps-3 md:ps-8  pe-4 "
                placeholder="Phone Number"
              />

              <textarea
                className="sm:w-[280px] md:w-[328px] h-[89px] text-black text-[12px] md:text-[14px] font-light border-[1px] border-[#BBBBBB] placeholder:text-black outline-none rounded-[15px] ps-3 md:ps-8  pe-4 pt-2 "
                placeholder="Address"
              ></textarea>

              <button className="sm:w-[280px] md:w-[328px] h-[40px] bg-[#3674B5] text-white rounded-[15px] flex justify-center items-center">
                Request OTP
              </button>
              <h1 className="text-[16px] font-semibold text-black">
                Verification
              </h1>
              <input
                type="number"
                className="sm:w-[280px] md:w-[328px] h-[40px] text-black text-[12px] md:text-[14px] font-light border-[1px] border-[#BBBBBB] placeholder:text-black outline-none rounded-[15px] ps-3 md:ps-8  pe-4 "
                placeholder="OTP"
              />
              <button className="sm:w-[280px] md:w-[328px] h-[40px] bg-[#3674B5] text-white rounded-[15px] flex justify-center items-center">
                Verify
              </button>

              <span className=" text-[14px] text-[#3674B5] font-semibold  ">
                Successfully Verified !
              </span>
              <h1 className="text-[16px] font-semibold text-black  ">
                Work Details
              </h1>
              <select
                name=""
                id=""
                className="sm:w-[280px] md:w-[328px] h-[40px] text-black text-[12px] md:text-[14px] font-light border-[1px] border-[#BBBBBB] rounded-[15px] px-2"
              >
                <option
                  value="Looking for (Fulltime / Part Time)"
                  selected
                  disabled
                  className="sm:w-[280px] md:w-[328px]] h-[40px] text-black text-[12px] md:text-[14px] font-light border-[1px] border-[#BBBBBB]  rounded-[15px] px-2 outline-none"
                >
                  Looking for (Fulltime / Part Time)
                </option>
              </select>

              <h1 className="text-[16px] font-semibold text-black py-[18px]">
                Part time jobs, Mention available Schedules
              </h1>

              <div className="flex flex-col md:flex-row gap-x-[20px]">
                <div className="hidden sm:flex gap-x-[20px]">
                  <div className="flex flex-col text-[16px] text-black font-light gap-[18px]">
                    <span>Sunday</span>
                    <span>Monday</span>
                    <span>Tuesday</span>
                    <span>Wednesday</span>
                    <span>Thursday</span>
                    <span>Friday</span>
                    <span>Saturday</span>
                  </div>

                  <div className="flex flex-col text-[16px] text-black font-light gap-[18px]">
                    {[...Array(7)].map((_, i) => (
                      <span key={i} className="flex gap-4 items-center">
                        <img
                          src={
                            i === 6
                              ? "/not-available-btn.svg"
                              : "/available-btn.svg"
                          }
                          alt=""
                        />
                        <span
                          className={`text-[16px] ${
                            i === 6 ? "text-[#FE1940]" : "text-[#09B438]"
                          }`}
                        >
                          {i === 6 ? "NA" : "Available"}
                        </span>
                      </span>
                    ))}
                  </div>

                  {/* Start Time Column */}
                  <div className="flex flex-col text-[16px] text-black font-light gap-[18px] ps-8">
                    <span className="border-b border-[#BBBBBB]">08:00 AM</span>
                    <span className="border-b border-[#BBBBBB]">08:00 AM</span>
                    <span className="border-b border-[#BBBBBB]">08:00 AM</span>
                    <span className="border-b border-[#BBBBBB]">02:00 PM</span>
                    <span className="border-b border-[#BBBBBB]">02:00 PM</span>
                    <span className="border-b border-[#BBBBBB]">08:00 AM</span>
                    <span className="border-b border-[#BBBBBB]"></span>
                  </div>

                  {/* End Time Column */}
                  <div className="flex flex-col text-[16px] text-black font-light gap-[18px] ps-8">
                    <span className="border-b border-[#BBBBBB]">08:00 PM</span>
                    <span className="border-b border-[#BBBBBB]">08:00 AM</span>
                    <span className="border-b border-[#BBBBBB]">08:00 AM</span>
                    <span className="border-b border-[#BBBBBB]">02:00 PM</span>
                    <span className="border-b border-[#BBBBBB]">02:00 PM</span>
                    <span className="border-b border-[#BBBBBB]">08:00 AM</span>
                    <span className="border-b border-[#BBBBBB]"></span>
                  </div>
                </div>

                {/* For small screens: stacked per day */}
                <div className="sm:hidden flex flex-col gap-[24px]">
                  {[
                    {
                      day: "Sunday",
                      status: "Available",
                      icon: "/available-btn.svg",
                      time: "08:00 AM  08:00 PM",
                      isNA: false,
                    },
                    {
                      day: "Monday",
                      status: "Available",
                      icon: "/available-btn.svg",
                      time: "08:00 AM  08:00 AM",
                      isNA: false,
                    },
                    {
                      day: "Tuesday",
                      status: "Available",
                      icon: "/available-btn.svg",
                      time: "08:00 AM  08:00 AM",
                      isNA: false,
                    },
                    {
                      day: "Wednesday",
                      status: "Available",
                      icon: "/available-btn.svg",
                      time: "02:00 PM  02:00 PM",
                      isNA: false,
                    },
                    {
                      day: "Thursday",
                      status: "Available",
                      icon: "/available-btn.svg",
                      time: "02:00 PM  02:00 PM",
                      isNA: false,
                    },
                    {
                      day: "Friday",
                      status: "Available",
                      icon: "/available-btn.svg",
                      time: "08:00 AM  08:00 AM",
                      isNA: false,
                    },
                    {
                      day: "Saturday",
                      status: "NA",
                      icon: "/not-available-btn.svg",
                      time: "",
                      isNA: true,
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex flex-col text-[16px] gap-[4px] border-b "
                    >
                      <span className="text-black font-medium">{item.day}</span>
                      <span className="flex items-center gap-2">
                        <img
                          src={item.icon}
                          alt="status"
                          className="w-[16px] h-[16px]"
                        />
                        <span
                          className={
                            item.isNA ? "text-[#FE1940]" : "text-[#09B438]"
                          }
                        >
                          {item.status}
                        </span>
                      </span>
                      {item.time && (
                        <span className="text-black font-light">
                          {item.time}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <h1 className="text-[16px] font-semibold text-black ">
                Do you have Work Experience?
              </h1>
              <div className="flex flex-col text-[12px] md:text-[14px] text-black font-light gap-[18px]">
                <select
                  name=""
                  id=""
                  className="sm:w-[280px] md:w-[328px] h-[40px] text-black text-[12px] md:text-[14px] font-light border-[1px] border-[#BBBBBB] rounded-[15px] px-2"
                >
                  <option
                    value="Current Location"
                    selected
                    disabled
                    className="sm:w-[280px] md:w-[328px] h-[40px] text-black text-[12px] md:text-[14px] font-light border-[1px] border-[#BBBBBB]  rounded-[15px] px-2 outline-none"
                  >
                    Previous Work Experience
                  </option>
                </select>
              </div>

              <h1 className="text-[16px] font-semibold text-black ">
                Please provide your experience details
              </h1>
              <div className="flex flex-col gap-5">
                <select
                  name=""
                  id=""
                  className="sm:w-[280px] md:w-[328px] h-[40px] text-black text-[12px] md:text-[14px] font-light border-[1px] border-[#BBBBBB] rounded-[15px] px-2"
                >
                  <option
                    value="Current Location"
                    selected
                    disabled
                    className="sm:w-[280px] md:w-[328px] h-[40px] text-black text-[12px] md:text-[14px] font-light border-[1px] border-[#BBBBBB]  rounded-[15px] px-2 outline-none"
                  >
                    Total Experience in years
                  </option>
                </select>
                <select
                  name=""
                  id=""
                  className="sm:w-[280px] md:w-[328px] h-[40px] text-black text-[12px] md:text-[14px] font-light border-[1px] border-[#BBBBBB] rounded-[15px] px-2"
                >
                  <option
                    value="Current Location"
                    selected
                    disabled
                    className="sm:w-[280px] md:w-[328px] h-[40px] text-black text-[12px] md:text-[14px] font-light border-[1px] border-[#BBBBBB]  rounded-[15px] px-2 outline-none"
                  >
                    Hospital (Last working)
                  </option>
                </select>
                <select
                  name=""
                  id=""
                  className="sm:w-[280px] md:w-[328px] h-[40px] text-black text-[12px] md:text-[14px] font-light border-[1px] border-[#BBBBBB] rounded-[15px] px-2"
                >
                  <option
                    value="Current Location"
                    selected
                    disabled
                    className="w-[280px] md:w-[328px] h-[40px] text-black text-[12px] md:text-[14px] font-light border-[1px] border-[#BBBBBB]  rounded-[15px] px-2 outline-none"
                  >
                    Department / Specialty
                  </option>
                </select>
              </div>

              <h1 className="text-[16px] font-semibold text-black ">
                Mention your Expertise / Skills
              </h1>
              <div className="flex gap-[18px] md:gap-10 flex-col md:flex-row ">
                <div className="flex flex-col text-[16px]  text-black font-light gap-[18px]">
                  <span className="flex gap-[5px] items-center">
                    <input type="checkbox" className="size-[20px]" />
                    <span className="text-[14px] md:text-[16px]">
                      Neonatal (NICU)
                    </span>
                  </span>
                  <span className="flex gap-[5px]  items-center">
                    <input type="checkbox" className="size-[20px]" />
                    <span className="text-[14px] md:text-[16px]">
                      Pediatrics
                    </span>
                  </span>
                  <span className="flex gap-[5px] items-center">
                    <input type="checkbox" className="size-[20px]" />
                    <span className="text-[14px] md:text-[16px]">
                      Medical-Surgical Nursing
                    </span>
                  </span>
                  <span className="flex gap-[5px] items-center">
                    <input type="checkbox" className="size-[20px]" />
                    <span className="text-[14px] md:text-[16px]">Oncology</span>
                  </span>
                  <span className="flex gap-[5px] items-center">
                    <input type="checkbox" className="size-[20px]" />
                    <span className="text-[14px] md:text-[16px]">
                      Neurology
                    </span>
                  </span>
                  <span className="flex gap-[5px] items-center">
                    <input type="checkbox" className="size-[20px]" />
                    <span className="text-[14px] md:text-[16px]">
                      Anesthesiology & Pain Management{" "}
                    </span>
                  </span>
                </div>

                <div className="flex flex-col text-[16px]  text-black font-light gap-[18px]">
                  <span className="flex gap-[5px] items-center">
                    <input type="checkbox" className="size-[20px]" />
                    <span className="text-[14px] md:text-[16px]">
                      Emergency & Trauma (Casualty)
                    </span>
                  </span>
                  <span className="flex gap-[5px]  items-center">
                    <input type="checkbox" className="size-[20px]" />
                    <span className="text-[14px] md:text-[16px]">
                      Obstetrics & Gynecology (OB/GYN)
                    </span>
                  </span>
                  <span className="flex gap-[5px] items-center">
                    <input type="checkbox" className="size-[20px]" />
                    <span className="text-[14px] md:text-[16px]">
                      Intensive Care Unit (ICU)
                    </span>
                  </span>
                  <span className="flex gap-[5px] items-center">
                    <input type="checkbox" className="size-[20px]" />
                    <span className="text-[14px] md:text-[16px]">
                      Cardiology
                    </span>
                  </span>
                  <span className="flex gap-[5px] items-center">
                    <input type="checkbox" className="size-[20px]" />
                    <span className="text-[14px] md:text-[16px]">
                      Orthopedics
                    </span>
                  </span>
                  <span className="flex gap-[5px] items-center">
                    <input type="checkbox" className="size-[20px]" />
                    <span className="text-[14px] md:text-[16px]">
                      Psychiatry & Mental Health
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <h1 className="text-[16px] font-semibold text-black px-[39px] pb-4">
              Upload your Registration / Experience Certificates
            </h1>
            <div className="flex flex-col gap-5 px-[39px]">
              <label
                for="cv-upload"
                className="sm:w-[280px] md:w-[328px] h-[40px] text-black text-[12px] md:text-[14px] font-light border-[1px] border-[#BBBBBB] rounded-[15px] ps-3 md:ps-8  pe-4 flex items-center justify-between cursor-pointer"
              >
                Upload CV <img src="/upload-btn.svg" alt="" />
                <input type="file" id="cv-upload" className="hidden" />
              </label>
              <label
                for="cv-upload"
                className="sm:w-[280px] md:w-[328px] h-[40px] text-black text-[12px] md:text-[14px] font-light border-[1px] border-[#BBBBBB] rounded-[15px] ps-3 md:ps-8  pe-4 flex items-center justify-between cursor-pointer"
              >
                Council Registration <img src="/upload-btn.svg" alt="" />
                <input type="file" id="cv-upload" className="hidden" />
              </label>
              <label
                for="cv-upload"
                className="sm:w-[280px] md:w-[328px] h-[40px] text-black text-[12px] md:text-[14px] font-light border-[1px] border-[#BBBBBB] rounded-[15px] ps-3 md:ps-8  pe-4 flex items-center justify-between cursor-pointer"
              >
                Experience Certificates <img src="/upload-btn.svg" alt="" />
                <input type="file" id="cv-upload" className="hidden" />
              </label>
              <label
                for="cv-upload"
                className="sm:w-[280px] md:w-[328px] h-[40px] text-black text-[12px] md:text-[14px] font-light border-[1px] border-[#BBBBBB] rounded-[15px] ps-3 md:ps-8  pe-4 flex items-center justify-between cursor-pointer"
              >
                Photo <img src="/upload-btn.svg" alt="" />
                <input type="file" id="cv-upload" className="hidden" />
              </label>

              <button className="sm:w-[280px] md:w-[328px] h-[40px] bg-[#3674B5] text-white rounded-[15px] flex justify-center items-center">
                Upload
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
