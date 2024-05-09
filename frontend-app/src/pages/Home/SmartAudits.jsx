import React, { useState } from "react";

const SmartAudits = () => {
  const [activeTab, setActiveTab] = useState("Smart Contract"); // Default active tab

  // Sample data for each category
  const categoryData = {
    "Smart Contract": [
      {
        id: 1,
        logo: "/Images/icons/icons1.png",
        title: "LoopFI",
        description:
          "A dedicated lending market for Ethereum carry trades. Users can supply a long tail of Liquid Restaking Tokens (LRT) and their derivatives as collateral to borrow ETH for increased yield exposure.",
      },
      {
        id: 2,
        logo: "/Images/icons/icons1.png",
        title: "Smart Contract Project 2",
        description:
          "A dedicated lending market for Ethereum carry trades. Users can supply a long tail of Liquid Restaking Tokens (LRT) and their derivatives as collateral to borrow ETH for increased yield exposure.",
      },
    ],
    DEFI: [
      {
        id: 3,
        logo: "/Images/icons/icons1.png",
        title: "DEFI Project 1",
        description:
          "A dedicated lending market for Ethereum carry trades. Users can supply a long tail of Liquid Restaking Tokens (LRT) and their derivatives as collateral to borrow ETH for increased yield exposure.",
      },
      {
        id: 4,
        logo: "/Images/icons/icons1.png",
        title: "DEFI Project 2",
        description:
          "A dedicated lending market for Ethereum carry trades. Users can supply a long tail of Liquid Restaking Tokens (LRT) and their derivatives as collateral to borrow ETH for increased yield exposure.",
      },
    ],
    NFTs: [
      {
        id: 5,
        logo: "/Images/icons/icons1.png",
        title: "NFT Project 1",
        description:
          "A dedicated lending market for Ethereum carry trades. Users can supply a long tail of Liquid Restaking Tokens (LRT) and their derivatives as collateral to borrow ETH for increased yield exposure.",
      },
      {
        id: 6,
        logo: "/Images/icons/icons1.png",
        title: "NFT Project 2",
        description:
          "A dedicated lending market for Ethereum carry trades. Users can supply a long tail of Liquid Restaking Tokens (LRT) and their derivatives as collateral to borrow ETH for increased yield exposure.",
      },
    ],
    Ethereum: [
      {
        id: 1,
        logo: "/Images/icons/icons1.png",
        title: "Smart Contract Project 1",
        description:
          "A dedicated lending market for Ethereum carry trades. Users can supply a long tail of Liquid Restaking Tokens (LRT) and their derivatives as collateral to borrow ETH for increased yield exposure.",
      },
      {
        id: 2,
        logo: "/Images/icons/icons1.png",
        title: "Smart Contract Project 2",
        description:
          "A dedicated lending market for Ethereum carry trades. Users can supply a long tail of Liquid Restaking Tokens (LRT) and their derivatives as collateral to borrow ETH for increased yield exposure.",
      },
    ],
    Solana: [
      {
        id: 3,
        logo: "/Images/icons/icons1.png",
        title: "DEFI Project 1",
        description:
          "A dedicated lending market for Ethereum carry trades. Users can supply a long tail of Liquid Restaking Tokens (LRT) and their derivatives as collateral to borrow ETH for increased yield exposure.",
      },
      {
        id: 4,
        logo: "/Images/icons/icons1.png",
        title: "DEFI Project 2",
        description:
          "A dedicated lending market for Ethereum carry trades. Users can supply a long tail of Liquid Restaking Tokens (LRT) and their derivatives as collateral to borrow ETH for increased yield exposure.",
      },
    ],
    dAPPs: [
      {
        id: 5,
        logo: "/Images/icons/icons1.png",
        title: "NFT DAPP 1",
        description:
          "A dedicated lending market for Ethereum carry trades. Users can supply a long tail of Liquid Restaking Tokens (LRT) and their derivatives as collateral to borrow ETH for increased yield exposure.",
      },
      {
        id: 6,
        logo: "/Images/icons/icons1.png",
        title: "NFT Project 2",
        description:
          "A dedicated lending market for Ethereum carry trades. Users can supply a long tail of Liquid Restaking Tokens (LRT) and their derivatives as collateral to borrow ETH for increased yield exposure.",
      },
    ],
    Avalanche: [
      {
        id: 3,
        logo: "/Images/icons/icons1.png",
        title: "DEFI Project 1",
        description:
          "A dedicated lending market for Ethereum carry trades. Users can supply a long tail of Liquid Restaking Tokens (LRT) and their derivatives as collateral to borrow ETH for increased yield exposure.",
      },
      {
        id: 4,
        logo: "/Images/icons/icons1.png",
        title: "DEFI Project 2",
        description:
          "A dedicated lending market for Ethereum carry trades. Users can supply a long tail of Liquid Restaking Tokens (LRT) and their derivatives as collateral to borrow ETH for increased yield exposure.",
      },
    ],
    Wallet: [
      {
        id: 5,
        logo: "/Images/icons/icons1.png",
        title: "NFT DAPP 1",
        description:
          "A dedicated lending market for Ethereum carry trades. Users can supply a long tail of Liquid Restaking Tokens (LRT) and their derivatives as collateral to borrow ETH for increased yield exposure.",
      },
      {
        id: 6,
        logo: "/Images/icons/icons1.png",
        title: "NFT Project 2",
        description:
          "A dedicated lending market for Ethereum carry trades. Users can supply a long tail of Liquid Restaking Tokens (LRT) and their derivatives as collateral to borrow ETH for increased yield exposure.",
      },
    ],
  };

  const changeTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-gradient-to-b from-black via-gray-800 to-black min-h-screen p-6 sm:p-10 lg:p-20">
      <h1 className="text-4xl sm:text-4xl text-center text-white font-medium mb-12 sm:mb-16">
        Latest Works
      </h1>
      <div className="flex flex-wrap justify-center items-center mb-4">
        {Object.keys(categoryData).map((category) => (
          <button
            key={category}
            onClick={() => changeTab(category)}
            className={`mr-2 sm:mr-4 mb-2 sm:mb-0 px-4 py-2 rounded-full sm:rounded-2xl text-sm sm:text-md font-semibold focus:outline-none ${
              activeTab === category
                ? "bg-white bg-opacity-90 text-black"
                : "bg-transparent border-2 border-orange-400  text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="mt-8 sm:mt-12 space-y-6 sm:space-y-8">
        {categoryData[activeTab].map((project) => (
          <div
            key={project.id}
            className="bg-opacity-10 lg:space-x-12 mx-auto max-w-md sm:max-w-5xl rounded-xl bg-white bg-blur-md border-2 border-white space-y-4 sm:space-y-0 border-opacity-30 text-white px-6 sm:px-8 py-4 flex flex-col  sm:flex-row "
          >
            <img
              src={project.logo}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full"
            />

            <div className="flex-1 sm:border-r-2 mx-auto max-w-4xl space-y-4 sm:border-white sm:border-opacity-10">
              <h2 className="text-lg sm:text-xl font-semibold">
                {project.title}
              </h2>
              <p className="text-white text-sm lg:w-[600px] sm:text-base">
                {project.description}
              </p>
              <div className="flex mt-2">
                <button className="bg-transparent border-2 border-white border-opacity-30 px-2 sm:px-3 py-1 rounded-full sm:rounded-2xl text-xs sm:text-sm font-semibold text-white">
                  Solidity
                </button>
                <button className="ml-2 bg-transparent border-2 border-white border-opacity-30 px-2 sm:px-3 py-1 rounded-full sm:rounded-2xl text-xs sm:text-sm font-semibold text-white">
                  dAPPs
                </button>
              </div>
            </div>

            <div className="mt-4 sm:mt-0 flex justify-center items-center sm:justify-end">
              <button className="bg-transparent border-2 border-orange-600 border-opacity-30 px-3 sm:px-4 hover:bg-gradient-to-r from-yellow-400 to-red-500 hover:text-white py-1 rounded-full sm:rounded-2xl text-sm sm:text-md font-semibold text-white">
                View Audit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmartAudits;
