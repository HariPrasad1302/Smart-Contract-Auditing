import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowDown, IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const Navbar = () => {
  const [serviceDropdown, setServiceDropdown] = useState(false);
  const [auditorDropdown, setAuditorDropdown] = useState(false);


  const AuditorDropdown = () => {
    setAuditorDropdown(!auditorDropdown);
  }

  const ServiceDropdown = () => {
    setServiceDropdown(!serviceDropdown);
  };

  const data = [
    {
      title: "Transaction Audits",
      description:
        "Auditors can examine transaction histories, amounts, timestamps, and other relevant data to ensure compliance with regulations and internal policies."
    },
    {
      title: "Smart Contract Audits",
      description:
        "Auditors can review smart contract code for vulnerabilities, errors, and potential security risks to ensure they operate as intended and are free from exploitable flaws."
    },
    {
      title: "Security Audits",
      description:
        "Auditors assess the effectiveness of security measures in protecting against unauthorized access, data breaches, and other cyber threats."
    },
    {
      title: "Transaction Audits",
      description:
        "Auditors can examine transaction histories, amounts, timestamps, and other relevant data to ensure compliance with regulations and internal policies."
    },
    {
      title: "Smart Contract Audits",
      description:
        "Auditors can review smart contract code for vulnerabilities, errors, and potential security risks to ensure they operate as intended and are free from exploitable flaws."
    },
    {
      title: "Security Audits",
      description:
        "Auditors assess the effectiveness of security measures in protecting against unauthorized access, data breaches, and other cyber threats."
    },
  ];

  return (
    <div className="bg-black drop-shadow sticky top-0 z-50">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-2 lg:px-8 lg:py-2">
        <div className="flex items-center space-x-16">
          <div className="lg:text-2xl text-xl font-medium text-white">
            SmartAudit
          </div>
          <div className="hidden lg:flex lg:items-center gap-8 mt-1">
            <div className="relative">
              <Link
                onClick={ServiceDropdown}
                className="text-lg items-center flex gap-1 transition duration-105 font-semibold text-white py-2 hover:text-blue-500 focus:outline-none"
              >
                Services
                {serviceDropdown ? (
                  <IoMdArrowDropup className="h-6 w-6" />
                ) : (
                  <IoMdArrowDropdown className="h-6 w-6" />
                )}
              </Link>
              {serviceDropdown && (
                <div className="absolute lg:w-[1000px] bg-gray-400 rounded-lg z-10 p-4">
                  <div className="grid grid-cols-3 gap-4 ">
                    
                  {data.map((item, index) => (
                    <>
                     <div
                        key={index}
                        className="  gap-2 mt-4 rounded-lg space-y-2"
                      >
                      
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-black">
                            {item.title}
                          </h3>
                          <p className="text-sm text-black">
                            {item.description}
                          </p>
                        </div>

                        
                      </div>
                    </>
                     
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link
              className="text-lg  font-semibold text-white py-2  hover:text-blue-500 "
              to="/blog"
            >
              Blog
            </Link>
            <div className="relative">
              <Link
                onClick={AuditorDropdown}
                
                className="text-lg items-center flex gap-1 transition duration-105 font-semibold text-white py-2 hover:text-blue-500 focus:outline-none"
              >
                Audits
                {auditorDropdown ? (
                  <IoMdArrowDropup className="h-6 w-6" />
                ) : (
                  <IoMdArrowDropdown className="h-6 w-6" />
                )}
              </Link>
              {auditorDropdown && (
                <div className="absolute left-0 lg:w-[500px] mt-1 bg-gray-400 rounded-lg p-4 z-10">
                  <h3 className="text-lg font-semibold text-black mb-2">
                    Join Our Network
                  </h3>
                  <p className="text-sm text-black mb-2">
                    Are you an auditor? Join our network to audit smart contracts and earn rewards.
                  </p>
                  <Link
                    to="/register"
                    className="text-sm font-semibold text-blue-900 underline hover:underline"
                  >
                    Register Now
                  </Link>
              </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center py-2 space-x-12">
          <div className="hidden lg:flex items-center gap-8">
            <Link
              className="text-lg  font-semibold text-white py-2 hover:text-blue-500 "
              to="/login"
            >
              Login
            </Link>
            <Link
              className="text-lg  font-semibold text-white py-2  hover:text-blue-500 "
              to="/signup"
            >
              SignUp
            </Link>
          </div>
          <div>
            <button className="text-white font-semibold text-md bg-blue-800 px-4 rounded-lg py-2">
              Request Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
