import React from 'react'

const Navbar = () => {

  return (
    <div className='bg-transparent flex items-center justify-between px-6 py-2 drop-shadow'>
      <h2 className='text-xl font-medium text-white py-2'>SmartAudit</h2>    

    <div className='flex items-center gap-8'>
        <div className='hidden md:flex items-center gap-6'>
            <h2 className='text-lg font-medium text-white py-2'>Home</h2>    
            <h2 className='text-lg font-medium text-white py-2'>Services</h2>    
            <h2 className='text-lg  font-medium text-white py-2'>Audits</h2>    
            <h2 className='text-lg  font-medium text-white py-2'>Solutions</h2>    
            <h2 className='text-lg  font-medium text-white py-2'>Contact Us</h2>    
        
        </div>

        <button className='text-white bg-blue-500 px-3 rounded-lg py-2'>
            Request Quote
        </button>

    </div>

        
    </div>
  )
}

export default Navbar
