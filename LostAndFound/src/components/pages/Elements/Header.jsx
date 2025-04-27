
import React from 'react'
import { Link , NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <div className='flex justify-between items-center bg-[#2c2c2c] text-white '>
      
      <div className='flex gap-[10px] font-bold text-xl p-[10px]  ' >
        <Link >Logo</Link>
      </div>
      <div className='flex gap-[40px] font-bold text-xl p-[15px]  '>
        <Link>Home</Link>
        <Link>Add Item</Link>
        <Link>Found Item</Link>
        <Link>Contact Us</Link>
      </div>


    </div>
  )
}

export default Header