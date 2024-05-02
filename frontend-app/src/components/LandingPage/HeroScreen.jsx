import React from "react";

const HeroScreen = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col lg:flex-row bg-black">
        <div className="lg:w-[65%] flex flex-col mt-10 lg:mt-40 px-10   lg:px-28">
          {/* <h1 className="text-sm lg:text-xl text-gray-300 font-medium mb-2 lg:mb-3 ">
            SMART AUDIT
          </h1> */}
          <h1 className="text-white text-xl lg:text-5xl font-bold mb-2 lg:mb-3">
            Validate Your Smart Contract with our Expertise
          </h1>
          <p className="text-gray-300 text-md lg:text-xl font-medium lg:w-[95%] mb-8">
            Auditors use the platform to prevent high severity bugs from
            reaching production by offering bounties for smart contract
            vulnerabilities.
          </p>
          <div className="flex flex-row gap-3">
            <button className="text-white  text-md bg-blue-800 px-4  rounded-full py-2">
              Audit
            </button>
            <button className="text-white  text-md bg-blue-800 px-4  rounded-full py-2">
              Request Quote
            </button>
          </div>
        </div>
        <div className="lg:w-[50%] mt-0 lg:mt-[-100px] flex justify-center items-center">
          <img
            src="bitcoin.gif" // Replace with your image source
            alt="Placeholder"
            className="w-2/3 mr-10 lg:w-58 border-3 border-black"
          />
        </div>
      </div>
    </>
  );
};

export default HeroScreen;
