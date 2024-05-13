import React from "react";

const gridData = [
  {
    id: "1",
    image: "/Images/services/smart-contracts.png",
    title: "Smart Contract Audit",
    description:
      "We follow advanced smart contract security audit practices to help you bring security to your Blockchain application so that you can save your money and time in the long run. ",
  },
  {
    id: "2",
    image: "/Images/services/high-powered.png",
    title: "Complete Security Assessment",
    description:
      "Our smart contract auditors monitor your application for watertight implementation of their business logic and ensure to execute industry-grade security mechanisms. ",
  },
  {
    id: "3",
    image: "/Images/services/audit.png",
    title: "Comprehensive Audit Reports - Creation",
    description:
      "Our smart contract auditors prepare a detailed executive summary of the project along with mitigation guidance after a deep smart contract security audit.",
  },
  {
    id: "4",
    image: "/Images/services/smart-contracts.png",
    title: "Threat Modeling",
    description:
      "We help you identify entry points for potential hackers, visualize your project’s attack surface, and continually update your threat model for evolving risks.",
  },
  {
    id: "5",
    image: "/Images/services/high-powered.png",
    title: "Complete Security Assessment",
    description:
      "Our smart contract auditors monitor your application for watertight implementation of their business logic and ensure to execute industry-grade security mechanisms. ",
  },
  {
    id: "6",
    image: "/Images/services/audit.png",
    title: "Comprehensive Audit Reports - Creation",
    description:
      "Our smart contract auditors prepare a detailed executive summary of the project along with mitigation guidance after a deep smart contract security audit.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-black p-4 py-8 lg:py-16">
      <div className="text-center space-y-4">
        <h1 className="text-white py-2 mt-5 font-medium text-2xl lg:text-4xl">
          Our Smart Contract Security Audit Services
        </h1>
        <p className='font-semibold mx-auto max-w-5xl text-lg text-white'>Being a reputed smart contract audit company, Antier offers end-to-end smart contract security audit services to help businesses of all sizes launch
highly secure and error-free Blockchain applications.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 gap-y-10 lg:p-4 lg:px-16 mt-12">
        {gridData.map((item) => (
          <div
            key={item.id}
            className="bg-opacity-50  bg-glass border border-orange-300 rounded-md p-4 flex flex-col justify-between"
          >
            <div>
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-14 mb-2 ml-5 "
              />
              <h3 className="text-xl text-white font-bold mt-4">
                {item.title}
              </h3>
              <p className="text-md text-white mt-2">{item.description}</p>
            </div>
            <div className="flex justify-center py-3 mt-4">
              <button className="text-white font-medium w-[170px] text-md bg-gradient-to-r from-yellow-400 to-red-500 px-4 rounded py-2">
                OverView
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
