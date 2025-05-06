import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='flex justify-between items-center bg-[#2c2c2c] text-white p-[10px]'>
      <div className='flex gap-[10px] font-bold text-xl p-[10px]'>
        <NavLink to="/"> 
        <img src='/LostLogo.png'
        alt='lostAndFound'
        className='h-[60px] w-[70px]  object-cover ' />
        </NavLink>
      </div>
      <div className='flex gap-[40px] font-bold text-xl p-[15px]'>
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/AddProduct" >Add Item</NavLink>
        <NavLink to="/LostItemList" >Found Item</NavLink>
        <NavLink to="/contactus" >Contact Us</NavLink>
        <NavLink to="/MyAi" >MyAi</NavLink>

      </div>
    </div>
  );
};

export default Header;
