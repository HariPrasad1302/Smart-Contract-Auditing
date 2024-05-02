import React from 'react'
import {Link} from "react-router-dom";

const Navbar = () => {

  return (
    <div className='bg-transparent mx-auto flex items-center justify-between px-6 py-2 lg:px-12 lg:py-4 drop-shadow'>
      <h2 className='lg:text-2xl text-xl font-medium text-white py-2'>SmartAudit</h2>    

    <div className='flex items-center space-x-16'>
        <div className='hidden lg:flex items-center gap-8'>
            <Link className='text-xl font-medium text-white py-2 hover:border-b-4 hover:border-blue-500 '>Home</Link>    
            <Link className='text-xl font-medium text-white py-2 hover:border-b-4 hover:border-blue-500 '>Services</Link>    
            <Link className='text-xl  font-medium text-white py-2 hover:border-b-4 hover:border-blue-500 '>Audits</Link>    
            <Link className='text-xl  font-medium text-white py-2 hover:border-b-4 hover:border-blue-500 '>Solutions</Link>    
            <Link className='text-xl  font-medium text-white py-2 hover:border-b-4 hover:border-blue-500 '>Contact Us</Link>    
        
        </div>

        <button className='text-white lg:text-xl text-sm bg-blue-500 px-3 rounded-lg py-2'>
            Request Quote
        </button>

    </div>

        
    </div>
  )
}

export default Navbar
