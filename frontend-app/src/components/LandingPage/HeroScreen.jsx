import React, { useState } from "react";
import SearchBar from "../Input/SearchInput";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
 
 
const HeroScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
 
  const handleSearch = () =>{
   
  }
 
  const onClearSearch = () =>{
    setSearchQuery("");
  }
 
  const [text] = useTypewriter({
    words: ["Smart Contract", "Transaction Audit", "Security Audit"],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 30,
    delaySpeed: 2000,
  });
 
 
  return (
    <>
      <div className="lg:h-[580px] h-[300px] flex flex-col items-center bg-gradient-to-b from-black via-gray-800 to-black">
        <div className="mt-[50px] lg:mt-[90px]">
          <h1 className="text-white  text-center text-2xl lg:text-6xl font-bold mb-2 lg:mb-4">
            Validate Your{" "}
            <span className="text-orange-500" id="smart-contract">{text}</span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor="#ff014f"
            />
 
            <br /> with our Expertise
          </h1>
        </div>
        <SearchBar value={searchQuery}
      onChange={({target}) => {
        setSearchQuery(target.value);
      }}
      handleSearch={handleSearch}
      onClearSearch={onClearSearch}
      />
        <div className="flex flex-row gap-3 mt-6 ">
          <button className="text-white font-medium w-32 md:w-44 lg:w-44 text-sm lg:text-md bg-gradient-to-r from-yellow-400 to-red-500 px-4 rounded py-2">
            Audit
          </button>
          <button className="text-white font-medium w-32 md:w-44 lg:w-44 text-sm lg:text-md bg-gradient-to-r from-yellow-400 to-red-500 px-4 rounded py-2">
            Request Quote
          </button>
        </div>
        <div className="hidden lg:row-span-1 lg:flex lg:justify-center lg:items-center py-[100px]">
          <div className=" flex flex-row gap-x-7">
            <div className="relative w-72   h-48 bg-gradient-to-br from-blue-500 to-purple-500 border border-gradient p-2 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
              <h3 className="text-white text-lg font-semibold mb-2">
                Smart Contract Audit
              </h3>
              <div className="flex items-center gap-1 text-gray-300 py-2">
                <img
                  src="/Images/icons/smart Contract icons/1-inch.b5d49ae6.png"
                  className="w-8 h-8 rounded-full"
                />
                <img
                  src="/Images/icons/smart Contract icons/apeswap.98b70365.png"
                  className="w-8 h-8 rounded-full"
                />
                <img
                  src="/Images/icons/smart Contract icons/download.png"
                  className="w-8 h-8 rounded-full"
                />
                <img
                  src="/Images/icons/smart Contract icons/gala-games.01ea062d.png"
                  className="w-8 h-8 rounded-full"
                />
                <img
                  src="/Images/icons/smart Contract icons/xrp.6cbb32bf.png"
                  className="w-8 h-8 rounded-full"
                />
              </div>
              <p className="text-gray-300 text-sm font-medium mt-2">
                Auditors can review smart contract code for errors, and
                potential security risks.
              </p>
            </div>
            <div className="relative  w-72  h-48 bg-gradient-to-r from-blue-500 to-purple-500 border border-gradient p-2 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
              <h3 className="text-white text-lg font-semibold mb-2">
                Blockchain L1/L2 Audit
              </h3>
              <div className="flex items-center gap-1 text-gray-300 py-2">
                <img
                  src="/Images/icons/smart Contract icons/1-inch.b5d49ae6.png"
                  className="w-8 h-8 rounded-full"
                />
                <img
                  src="/Images/icons/smart Contract icons/apeswap.98b70365.png"
                  className="w-8 h-8 rounded-full"
                />
                <img
                  src="/Images/icons/smart Contract icons/download.png"
                  className="w-8 h-8 rounded-full"
                />
                <img
                  src="/Images/icons/smart Contract icons/gala-games.01ea062d.png"
                  className="w-8 h-8 rounded-full"
                />
                <img
                  src="/Images/icons/smart Contract icons/xrp.6cbb32bf.png"
                  className="w-8 h-8 rounded-full"
                />
              </div>
              <p className="text-gray-300 text-sm font-medium mt-2">
                Auditors can review smart contract code for errors, and
                potential security risks.
              </p>
            </div>
            <div className="relative w-72 h-48 bg-gradient-to-br from-blue-500 to-purple-500 border border-gradient p-2 space-y-2 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
              <h3 className="text-white text-lg font-semibold mb-2">
                Wallet Audit
              </h3>
              <div className="flex items-center gap-1 text-gray-300 py-2">
                <img
                  src="/Images/icons/smart Contract icons/1-inch.b5d49ae6.png"
                  className="w-8 h-8 rounded-full"
                />
                <img
                  src="/Images/icons/smart Contract icons/apeswap.98b70365.png"
                  className="w-8 h-8 rounded-full"
                />
                <img
                  src="/Images/icons/smart Contract icons/download.png"
                  className="w-8 h-8 rounded-full"
                />
                <img
                  src="/Images/icons/smart Contract icons/gala-games.01ea062d.png"
                  className="w-8 h-8 rounded-full"
                />
                <img
                  src="/Images/icons/smart Contract icons/xrp.6cbb32bf.png"
                  className="w-8 h-8 rounded-full"
                />
              </div>
              <p className="text-gray-300 text-sm font-medium mt-2">
                Auditors can review smart contract code for errors, and
                potential security risks.
              </p>
            </div>
            <div className="relative w-72  h-48 bg-gradient-to-r from-blue-500 to-purple-500 border border-gradient p-2 space-y-2 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
              <h3 className="text-white text-lg font-semibold mb-2">
                Transaction Audit
              </h3>
              <div className="flex items-center gap-1 text-gray-300 py-2">
                <img
                  src="/Images/icons/smart Contract icons/1-inch.b5d49ae6.png"
                  className="w-8 h-8 rounded-full"
                />
                <img
                  src="/Images/icons/smart Contract icons/apeswap.98b70365.png"
                  className="w-8 h-8 rounded-full"
                />
                <img
                  src="/Images/icons/smart Contract icons/download.png"
                  className="w-8 h-8 rounded-full"
                />
                <img
                  src="/Images/icons/smart Contract icons/gala-games.01ea062d.png"
                  className="w-8 h-8 rounded-full"
                />
                <img
                  src="/Images/icons/smart Contract icons/xrp.6cbb32bf.png"
                  className="w-8 h-8 rounded-full"
                />
              </div>
              <p className="text-gray-300 text-sm font-medium mt-2">
                Auditors can review smart contract code for errors, and
                potential security risks.
              </p>
            </div>
            {/* <div className="relative w-60  h-48 bg-gradient-to-br from-blue-500 to-purple-500 border border-gradient p-2 space-y-2 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
              <h3 className="text-white text-lg font-semibold mb-2">
                Security Audits
              </h3>
              <div className="flex items-center gap-1 text-gray-300">
                <img
                  src="/Images/icons/smart Contract icons/1-inch.b5d49ae6.png"
                  className="w-8 h-8 rounded-full"
                />
                <img
                  src="/Images/icons/smart Contract icons/apeswap.98b70365.png"
                  className="w-8 h-8 rounded-full"
                />
                <img
                  src="/Images/icons/smart Contract icons/download.png"
                  className="w-8 h-8 rounded-full"
                />
                <img
                  src="/Images/icons/smart Contract icons/gala-games.01ea062d.png"
                  className="w-8 h-8 rounded-full"
                />
                <img
                  src="/Images/icons/smart Contract icons/xrp.6cbb32bf.png"
                  className="w-8 h-8 rounded-full"
                />
              </div>
              <p className="text-gray-300 text-sm font-medium mt-2">
                Auditors can review smart contract code for errors, and
                potential security risks.
              </p>
            </div> */}
            {/* <div className="relative  w-48  bg-gradient-to-br from-red-500 to-yellow-500 border border-gradient p-2 space-y-2 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
              <h3 className="text-white text-lg font-semibold mb-2">
                Smart Contract Audit
              </h3>
              <div className="flex items-center gap-1 text-gray-300">
                <img
                  src="/Images/icons/smart Contract icons/1-inch.b5d49ae6.png"
                  className="w-8 h-8 rounded-full"
                />
                <img
                  src="/Images/icons/smart Contract icons/apeswap.98b70365.png"
                  className="w-8 h-8 rounded-full"
                />
                <img
                  src="/Images/icons/smart Contract icons/download.png"
                  className="w-8 h-8 rounded-full"
                />
                <img
                  src="/Images/icons/smart Contract icons/gala-games.01ea062d.png"
                  className="w-8 h-8 rounded-full"
                />
                <img
                  src="/Images/icons/smart Contract icons/xrp.6cbb32bf.png"
                  className="w-8 h-8 rounded-full"
                />
              </div>
              <p className="text-gray-300 text-xs mt-2">
                Auditors can review smart contract code for errors, and
                potential security risks.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
 
export default HeroScreen;