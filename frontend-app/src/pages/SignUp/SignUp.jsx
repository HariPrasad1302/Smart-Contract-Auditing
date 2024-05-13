import React, { useState } from 'react'
import {Link} from "react-router-dom";
import PasswordInput from '../../components/Input/PasswordInput';
import { validateEmail, validatePassword } from '../../utils/helper';
import { IoLogoGoogle } from 'react-icons/io';
import {IoReturnUpBack, IoChevronBackCircleOutline} from 'react-icons/io5';


const SignUp = () => {

  const [emailID, setEmailID] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [emailerror, setEmailError] = useState(null);
  const[nameError, setNameError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const handleLogin = async(e) =>{
    e.preventDefault();

    
    if(!fullName){
        setNameError("*Please enter a valid name.");
        return;
    }
    setNameError("");

    if(!validateEmail(emailID)){
      setEmailError("* Please enter a valid email address.");
      return;
    }
    setEmailError("");

    if (!password) {
        setPasswordError("* Please enter a password.");
        return;
    } else if (!validatePassword(password)) {
        setPasswordError("* Please enter a valid password (Eg: Abcd@6371)");
        return;
    }
    setPasswordError("");
    
  }
  return (
    <>

<div className='flex items-center bg-gradient-to-b w- from-black via-gray-800 to-black justify-center min-h-screen'>
    <div className='w-[400px] border rounded bg-white bg-opacity-10'>
      <Link to="/login" className='flex items-center text-white font-semibold hover:underline text-lg gap-1 mt-3 ml-3'>
        <IoChevronBackCircleOutline className='text-white w-7 h-7'/>
        Back

      </Link>
      <div className='px-9 py-10'>
        <form onSubmit={handleLogin}>
          <h4 className='text-3xl font-semibold text-white mb-7 text-center'>Sign Up</h4>

          <input 
          type="text" 
          placeholder='Name' 
          className='w-full text-sm text-white bg-transparent border-[1.5px] px-5 py-3 rounded mb-4 outline-none'
          value={fullName}
          onChange={(e) => setFullName(e.target.value)} 
          />
          {nameError && <p className='text-gray-200 text-xs pb-1 mb-2'>{nameError}</p>}

          <input 
          type="text" 
          placeholder='Email' 
          className='w-full text-sm text-white bg-transparent border-[1.5px] px-5 py-3 rounded mb-4 outline-none'
          value={emailID}
          onChange={(e) => setEmailID(e.target.value)} 
          />
          {emailerror && <p className='text-gray-200 text-xs pb-1 mb-2'>{emailerror}</p>}


          <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)}/>

          {passwordError && <p className='text-gray-200 text-xs pb-1'>{passwordError}</p>}



          <button type='submit' className='w-full text-md font-semibold bg-white bg-opacity-70 text-black p-2 rounded mt-1 hover:scale-105 transition'>
            Create Account
          </button>

          <h1 className='text-white text-lg font-semibold text-center mt-4'>Or</h1>

          <button type='submit' className='w-full flex items-center gap-4 justify-center text-md font-semibold bg-white bg-opacity-70 text-black p-2 rounded mt-1 hover:scale-105 transition'>
            <IoLogoGoogle className='w-7 h-7'/>
            SignUp with Google
          </button>

          <p className='text-sm text-center text-white mt-4'>
            Already Registered? {""}
            <Link to="/login" className="font-medium text-white underline">
              Sign In
            </Link>
          </p>
        </form>
        

      </div>

        
      </div>
    </div>
    </>
  )
}

export default SignUp
