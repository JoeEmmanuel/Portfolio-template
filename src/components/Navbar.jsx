import React, { useState } from 'react'
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { HiMenuAlt1 } from 'react-icons/hi';
import { LuMessagesSquare } from 'react-icons/lu';
import { ImInstagram } from 'react-icons/im';
import { GrProjects } from 'react-icons/gr';

const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false);
  const [scrolledNav, setScrolledNav] = useState(false);

   const onScroll = () => {
     if(window.scrollY >= 10) {
       setScrolledNav(true);
     } else{
      setScrolledNav(false);
     }
   }

   window.addEventListener('scroll', onScroll);

  return (
    <header className=''>
       <nav className={scrolledNav ? ' bg-gradient-to-b from-black_99 to-black_cc transition ease-in duration-1000  backdrop-blur-md fixed w-full top-0 left-0 z-10 lg:px-10 lg:py-6 p-4 flex justify-between items-center text-white' : ' transition-all ease-in duration-1000 fixed w-full top-0 left-0 z-10 lg:px-10 lg:py-6 p-4 flex justify-between items-center text-white'}>
         <div className=" flex flex-col leading-none text-xl font-extrabold cursor-pointer">
            <span>TU</span>
            <span>RA</span>
         </div>
         <HiMenuAlt1  className=' md:hidden text-3xl cursor-pointer' onClick={ () => setOpenMenu(!openMenu)}/>
         <ul className=' hidden gap-12 font-semibold md:flex'>
            <li className=' text-xs'>
              PROJECTS
            </li>            
            <li className=' text-xs'>
              CONTACT
            </li>
         </ul>

         {/* SIDEBAR MENU LIST */}
       <div className={openMenu ? " grid gap-4 bg-gradient-to-b from-black_99 to-black_cc backdrop-blur-xl py-4 w-auto h-fit absolute right-4 top-[4.5rem] rounded-md text-primary -z-[9] opacity-1 transition-all duration-1000" : "grid gap-4 bg-white px-8 py-4 w-auto absolute right-0 opacity-0 -top-[4.5rem] h-fit -z-[99] opacity-1 transition-all duration-1000"}>
        <ul className=' grid gap-4 font-semibold '>
            <li className='text-xs flex gap-3 items-center peer hover:bg-primary hover:text-secondary px-8 py-2 w-full transition-all cursor-pointer'>
             <GrProjects className=' peer-hover:stroke-orange-50 stroke-primary'/>
              PROJECTS
            </li>            
            <li className=' text-xs flex gap-3 items-center hover:bg-primary hover:text-secondary px-8 py-2 w-full transition-all cursor-pointer'>
            <LuMessagesSquare />
              CONTACT
            </li>
         </ul>

         <div className=" bottom-10 flex gap-6 text-xs px-8">
          <FaFacebook className=" hover:text-gray-900 transition hover:scale-150 cursor-pointer"/>
          <FaTwitter className=" hover:text-gray-900 transition hover:scale-150 cursor-pointer"/>
          <ImInstagram className=" hover:text-gray-900 transition hover:scale-150 cursor-pointer"/>
        </div>
       </div>
       </nav>
    </header>
  )
}

export default Navbar
