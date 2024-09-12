import React, { useState } from 'react'
import "./Header.css"
import { Link } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { FaSun } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { LuDelete } from "react-icons/lu";

const Header = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
    const toggleDarkMode = () => {
      window.document.body.classList.toggle("dark");
      console.log(1);
      
    };
  return(
    <div className="header mb-32 py-1">
    <div className=' container mx-auto px-5'>
      <nav className="navbar 
       flex items-center justify-between">
        <div className="navbar__logo">
         <Link to={""}><p className='dark:text-white text-5xl font-[900] navbar__logo'>SHOP.CO</p>
         </Link> 
        </div>
        <div className='  bg-white rounded-md search__bag dark:bg-black

 flex items-center px-5 py-2'>
          <div className='flex gap-1 items-center px-2 text-black	  '>
            <div className='flex w-28 mx-9 items-center'>
          <select className='outline-none	  text-xl text-dark dark:text-white dark:bg-black cursor-pointer  ' name="" id="">
              <option value="">Shop</option>
              <option value="">ABDUVORIS</option>
              <option value="">IQBOLJON</option>
              <option value="">UUG'BEK</option>
            </select>
            </div>
            
          <p className='w-28 mx-2 text-xl text-dark dark:text-white dark:bg-black cursor-pointer heder__item'>On Sale</p>
          <p className='w-28 mx-2 text-xl text-dark dark:text-white dark:bg-black cursor-pointer heder__item'>New Arrivals</p>
          <p className='w-28 mx-2 text-xl text-dark dark:text-white dark:bg-black cursor-pointer heder__item'>Brands</p>
          
          </div>
         
        </div>
        <div className='flex gap-1 p-2 border h_map  items-center rounded-md bg-white dark:text-white dark:bg-black 

'> 

   
          
        </div>
        <div className={`nav__collect ${isMenuOpen ? "show" : ""}  dark:bg-black dark:text-white`}>
          <div onClick={toggleMenu} className="navbar__menu  cursor-pointer text-2xl text-white">
        <LuDelete  className='text-4xl text-right'/>
        </div>
          <ul className="navbar__collection flex gap-4   dark:text-white dark:bg-black p-3 	">
            <NavLink className={" text-black dark:text-white  flex gap-1 items-center"} to={"/wishlist"}>
            <FaRegHeart  className='text-2xl'/><sup className='px-1 py-2 rounded-full mb-3 text-white bg-lime-600'>0</sup>
           <p className='text-xs'> </p>
            </NavLink>

            <NavLink className={" text-black dark:text-white  flex gap-0 items-center"} to={"/wishlist"}>
            <IoCartOutline  className='text-2xl'/>
<sup className='px-1 py-2 rounded-full
mb-3
text-white bg-lime-600'>0</sup>
   <p className='text-xs'> </p>   </NavLink>

        
          </ul>
        </div>
       
  <div className='flex gap-2 items-center'>
    <button
      onClick={toggleDarkMode}
      className="p-2  text-dark rounded-lg"
    >
<FaSun className='text-dark text-3xl'/>
</button>
        <div onClick={toggleMenu} className="navbar__menu cursor-pointer text-2xl">
        <IoMenu className='text-4xl'/>
        </div>
</div>
      </nav>
    </div>
  </div>
  );
};

export default Header;
