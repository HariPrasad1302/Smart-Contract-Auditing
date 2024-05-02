import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-black mx-auto flex items-center justify-between px-6 py-2 lg:px-8 lg:py-3 drop-shadow sticky top-0 z-50">
      <div className="lg:text-2xl text-xl font-medium text-white py-2">
        SmartAudit
      </div>

      <div className="flex items-center py-2 space-x-16">
        <div className="hidden lg:flex items-center gap-8">
          <Link className="text-md font-poppins font-medium text-white py-2  hover:text-blue-500 ">
            Services
          </Link>
          <Link className="text-md  font-medium text-white py-2 hover:text-blue-500 ">
            Audits
          </Link>

          <Link className="text-md  font-medium text-white py-2  hover:text-blue-500 ">
            Contact Us
          </Link>
        </div>
      </div>
      <div>
        <button className="text-white  text-md bg-blue-800 px-4  rounded-full py-2">
          Request Quote
        </button>
      </div>
    </div>
  );
};

export default Navbar;
