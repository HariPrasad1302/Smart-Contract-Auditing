import React, { useEffect } from "react";

const HeroScreen = () => {
  useEffect(() => {
    const animateLetters = (word, targetId) => {
      const target = document.getElementById(targetId);
      let index = 0;

      const showNextLetter = () => {
        if (index < word.length) {
          target.textContent = word.slice(0, index + 1);
          index++;
          setTimeout(showNextLetter, 100); // Adjust speed here (milliseconds)
        }
      };

      showNextLetter();

      // Clean up the effect
      return () => {
        // Clear the timeout to prevent memory leaks
        clearTimeout(showNextLetter);
      };
    };

    animateLetters("Smart Contract", "smart-contract");

    // Clean up the effect on component unmount
    return () => {
      const target = document.getElementById("smart-contract");
      target.textContent = ""; // Clear the content when unmounting
    };
  }, []);

  return (
    <>
      <div class="h-[620px] flex flex-col items-center bg-gradient-to-b from-black via-gray-800 to-black">
        <div className="mt-[50px] lg:mt-[90px]">
          <h1 class="text-white px-[40px] lg:px-[200px] text-center text-xl lg:text-6xl font-bold mb-2 lg:mb-4">
            Validate Your{" "}
            <span className="text-orange-500" id="smart-contract"></span>
            <br /> with our Expertise
          </h1>
        </div>
        <div className="relative flex  items-center py-5">
          <input
            type="text"
            name="q"
            className="w-[200px] lg:w-[500px] font-sans border h-11 px-4 rounded focus:outline-none"
            placeholder="Search For Your Saree"
          />
          <button type="submit">
            <svg
              className="hidden sm:block  text-blue-400 h-5 w-5 absolute top-[35px] ml-[-40px]  fill-orange-500"
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
        <div className="flex flex-row gap-3 mt-6 ">
          <button className="text-white font-medium w-[170px] text-md bg-gradient-to-r from-yellow-400 to-red-500 px-4 rounded py-2">
            Audit
          </button>
          <button className="text-white font-medium w-[170px] text-md bg-gradient-to-r from-yellow-400 to-red-500 px-4 rounded py-2">
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
