import React from "react";
import { Link } from "react-router-dom";
import {IoMdArrowDown, IoMdArrowDropdown} from "react-icons/io"

const Navbar = () => {
  return (
    <div className="bg-black  drop-shadow sticky top-0 z-50">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-2 lg:px-8 lg:py-2">
          
          <div className="flex items-center  space-x-16">
            <div className="lg:text-2xl text-xl font-medium text-white">
              SmartAudit
            </div>
            <div className="hidden lg:flex lg:items-center gap-8 mt-1">
                  
                    <Link className="text-lg items-center flex gap-1  font-semibold text-white py-2 hover:text-blue-500 ">
                      Services

                      <IoMdArrowDropdown className="h-6 w-6"/>

                    </Link>

                    <Link className="text-lg  font-semibold text-white py-2  hover:text-blue-500 ">
                      Blog
                    </Link>
                    <Link className="text-lg items-center flex gap-1  font-semibold text-white py-2 hover:text-blue-500 ">
                      Audits

                      <IoMdArrowDropdown className="h-6 w-6"/>

                    </Link>
              
            </div>
          </div>

          <div className="flex items-center py-2 space-x-12">
            <div className="hidden lg:flex items-center gap-8">
                  
                    <Link className="text-lg  font-semibold text-white py-2 hover:text-blue-500 ">
                    Login
                    </Link>

                    <Link className="text-lg  font-semibold text-white py-2  hover:text-blue-500 ">
                      SignUp
                    </Link>
              
            </div>
            <div>
              <button className="text-white font-semibold text-md bg-blue-800 px-4  rounded-lg py-2">
                Request Quote
              </button>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Navbar;
