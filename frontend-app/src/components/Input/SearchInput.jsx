import React from 'react'
import {IoMdClose} from 'react-icons/io'
import { FaMagnifyingGlass } from 'react-icons/fa6'

const SearchBar = ({value, onChange, handleSearch, onClearSearch}) => {
  return (
    <div className='w-80 lg:w-[600px] mt-4  flex items-center px-4 bg-slate-100 rounded-md'>
      <input
        type='text'
        placeholder='Search Here'
        className='w-full text-xs bg-transparent py-[11px] lg:py-[14px] outline-none'
        value={value}
        onChange={onChange}
      />
    {value && (
        <IoMdClose className='text-xl fill-orange-500 cursor-pointer hover:text-black mr-3' onClick={onClearSearch}/>
    )}      
     <FaMagnifyingGlass  className='fill-orange-500 cursor-pointer hover:text-black' onClick={handleSearch}/>
    </div>
  )
}

export default SearchBar
