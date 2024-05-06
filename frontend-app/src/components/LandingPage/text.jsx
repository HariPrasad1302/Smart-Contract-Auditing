import React from "react";

const HeroScreen = () => {
  return (
    <>
      <div className="lg:h-[600px] grid grid-cols-1 bg-gradient-to-b from-black via-gray-800 to-black">
        <div className="   flex flex-col text-center mt-10 lg:mt-28 px-10 mb-12 lg:ml-10">
          <h1 className="text-white text-xl lg:text-6xl  w-[70%] font-bold mb-2 lg:mb-4">
            Validate Your Smart Contract with our Expertise
          </h1>
          {/* <p className="text-gray-300 text-md lg:text-lg font-medium mb-4">
            Auditors use the platform to prevent high severity bugs from
            reaching production by offering bounties for smart contract
            vulnerabilities.
          </p> */}
          <div className="relative flex  items-center">
            <input
              type="text"
              name="q"
              className="hidden sm:block lg:w-[500px] font-sans border h-11 px-4 rounded focus:outline-none"
              placeholder="Search For Your Saree"
            />
            <button type="submit">
              <svg
                className="hidden sm:block  text-blue-400 h-5 w-5 absolute top-3.5 ml-[-40px]  fill-blue-900"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 56.966 56.966"
                style={{ enableBackground: "new 0 0 56.966 56.966" }}
                xmlSpace="preserve"
                stroke="#E37383"
              >
                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"></path>
              </svg>
            </button>
          </div>
          <div className="flex flex-row gap-3 mt-4 ">
            <button className="text-white  text-md bg-blue-800 px-4 rounded-full py-2">
              Audit
            </button>
            <button className="text-white  text-md bg-blue-800 px-4 rounded-full py-2">
              Request Quote
            </button>
          </div>
        </div>
        {/* <div className="hidden lg:col-span-1 lg:flex lg:justify-center lg:items-center">
          <div className="grid grid-cols-3 gap-4">
            <div className="relative space-y-2 w-40 mt-12 h-44 bg-gradient-to-br from-blue-500 to-purple-500 border border-gradient p-2 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
              <h3 className="text-white text-lg font-semibold mb-2">
                Smart Contract Audit
              </h3>
              <div className="flex items-center gap-1 text-gray-300">
                <img
                  src="/Images/icons/smart Contract icons/1-inch.b5d49ae6.png"
                  className="w-6 h-6 rounded-full"
                />
                <img
                  src="/Images/icons/smart Contract icons/apeswap.98b70365.png"
                  className="w-6 h-6 rounded-full"
                />
                <img
                  src="/Images/icons/smart Contract icons/download.png"
                  className="w-6 h-6 rounded-full"
                />
                <img
                  src="/Images/icons/smart Contract icons/gala-games.01ea062d.png"
                  className="w-6 h-6 rounded-full"
                />
                <img
                  src="/Images/icons/smart Contract icons/xrp.6cbb32bf.png"
                  className="w-6 h-6 rounded-full"
                />
              </div>
              <p className="text-gray-300 text-xs mt-2">
                Auditors can review smart contract code for errors, and
                potential security risks.
              </p>
            </div>
            <div className="relative space-y-2 mb-12 w-40 bg-gradient-to-br from-red-500 to-yellow-500 border border-gradient p-2 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
              <h3 className="text-white text-lg font-semibold mb-2">
                Blockchain L1/L2 Audit
              </h3>
              <div className="flex items-center gap-1 text-gray-300">
                <img
                  src="/Images/icons/smart Contract icons/1-inch.b5d49ae6.png"
                  className="w-6 h-6 rounded-full"
                />
                <img
                  src="/Images/icons/smart Contract icons/apeswap.98b70365.png"
                  className="w-6 h-6 rounded-full"
                />
                <img
                  src="/Images/icons/smart Contract icons/download.png"
                  className="w-6 h-6 rounded-full"
                />
                <img
                  src="/Images/icons/smart Contract icons/gala-games.01ea062d.png"
                  className="w-6 h-6 rounded-full"
                />
                <img
                  src="/Images/icons/smart Contract icons/xrp.6cbb32bf.png"
                  className="w-6 h-6 rounded-full"
                />
              </div>
              <p className="text-gray-300 text-xs mt-2">
                Auditors can review smart contract code for errors, and
                potential security risks.
              </p>
            </div>
            <div className="relative mt-12 w-40 bg-gradient-to-br from-red-500 to-yellow-500 border border-gradient p-2 space-y-2 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
              <h3 className="text-white text-lg font-semibold mb-2">
                Wallet Audit
              </h3>
              <div className="flex items-center gap-1 text-gray-300">
                <img
                  src="/Images/icons/smart Contract icons/1-inch.b5d49ae6.png"
                  className="w-6 h-6 rounded-full"
                />
                <img
                  src="/Images/icons/smart Contract icons/apeswap.98b70365.png"
                  className="w-6 h-6 rounded-full"
                />
                <img
                  src="/Images/icons/smart Contract icons/download.png"
                  className="w-6 h-6 rounded-full"
                />
                <img
                  src="/Images/icons/smart Contract icons/gala-games.01ea062d.png"
                  className="w-6 h-6 rounded-full"
                />
                <img
                  src="/Images/icons/smart Contract icons/xrp.6cbb32bf.png"
                  className="w-6 h-6 rounded-full"
                />
              </div>
              <p className="text-gray-300 text-xs mt-2">
                Auditors can review smart contract code for errors, and
                potential security risks.
              </p>
            </div>
            <div className="relative w-40 mb-12 h-44 bg-gradient-to-br from-green-500 to-blue-500 border border-gradient p-2 space-y-2 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
              <h3 className="text-white text-lg font-semibold mb-2">
                Transaction Audit
              </h3>
              <div className="flex items-center gap-1 text-gray-300">
                <img
                  src="/Images/icons/smart Contract icons/1-inch.b5d49ae6.png"
                  className="w-6 h-6 rounded-full"
                />
                <img
                  src="/Images/icons/smart Contract icons/apeswap.98b70365.png"
                  className="w-6 h-6 rounded-full"
                />
                <img
                  src="/Images/icons/smart Contract icons/download.png"
                  className="w-6 h-6 rounded-full"
                />
                <img
                  src="/Images/icons/smart Contract icons/gala-games.01ea062d.png"
                  className="w-6 h-6 rounded-full"
                />
                <img
                  src="/Images/icons/smart Contract icons/xrp.6cbb32bf.png"
                  className="w-6 h-6 rounded-full"
                />
              </div>
              <p className="text-gray-300 text-xs mt-2">
                Auditors can review smart contract code for errors, and
                potential security risks.
              </p>
            </div>
            <div className="relative mt-12 w-40 bg-gradient-to-br from-yellow-500 to-red-500 border border-gradient p-2 space-y-2 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
              <h3 className="text-white text-lg font-semibold mb-2">
                Security Audits
              </h3>
              <div className="flex items-center gap-1 text-gray-300">
                <img
                  src="/Images/icons/smart Contract icons/1-inch.b5d49ae6.png"
                  className="w-6 h-6 rounded-full"
                />
                <img
                  src="/Images/icons/smart Contract icons/apeswap.98b70365.png"
                  className="w-6 h-6 rounded-full"
                />
                <img
                  src="/Images/icons/smart Contract icons/download.png"
                  className="w-6 h-6 rounded-full"
                />
                <img
                  src="/Images/icons/smart Contract icons/gala-games.01ea062d.png"
                  className="w-6 h-6 rounded-full"
                />
                <img
                  src="/Images/icons/smart Contract icons/xrp.6cbb32bf.png"
                  className="w-6 h-6 rounded-full"
                />
              </div>
              <p className="text-gray-300 text-xs mt-2">
                Auditors can review smart contract code for errors, and
                potential security risks.
              </p>
            </div>
            <div className="relative mb-12 w-40  bg-gradient-to-br from-red-500 to-yellow-500 border border-gradient p-2 space-y-2 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
              <h3 className="text-white text-lg font-semibold mb-2">
                Smart Contract Audit
              </h3>
              <div className="flex items-center gap-1 text-gray-300">
                <img
                  src="/Images/icons/smart Contract icons/1-inch.b5d49ae6.png"
                  className="w-6 h-6 rounded-full"
                />
                <img
                  src="/Images/icons/smart Contract icons/apeswap.98b70365.png"
                  className="w-6 h-6 rounded-full"
                />
                <img
                  src="/Images/icons/smart Contract icons/download.png"
                  className="w-6 h-6 rounded-full"
                />
                <img
                  src="/Images/icons/smart Contract icons/gala-games.01ea062d.png"
                  className="w-6 h-6 rounded-full"
                />
                <img
                  src="/Images/icons/smart Contract icons/xrp.6cbb32bf.png"
                  className="w-6 h-6 rounded-full"
                />
              </div>
              <p className="text-gray-300 text-xs mt-2">
                Auditors can review smart contract code for errors, and
                potential security risks.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default HeroScreen;
