import React from 'react';

//import component
import Socials from "./Socials";
import Logo from "../img/header/logo.svg";
import MobileNav from "./MobileNav";

//import Link
import { Link } from "react-router-dom";

const Header = () => {
  return(
    <header className='fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center bg-slate-50 shadow-md'>
      <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
        {/* Logo */}
        <Link to={"/"} className='max-w-[400px]'>
        {/* <img src={Logo}></img> */}
        <h2 className='text-[40px] lg:text-[70px] font-primary font-bold capitalize leading-[120%] tracking-[-0.05em] mb-2'>ilyas rasyid</h2>
        </Link>
        {/* nav - initiality hidden - show on desktop mode */}
        <nav className='hidden lg:flex gap-x-12 font-semibold'>
          <Link to={"/"} className='text-[#696c6d] hover:text-primary transition'>Utama</Link>
          <Link to={"/about"} className='text-[#696c6d] hover:text-primary transition'>Tentang</Link>
          <Link to={"/portfolio"} className='text-[#696c6d] hover:text-primary transition'>Portofolio</Link>
          <Link to={"/certificate"} className='text-[#696c6d] hover:text-primary transition'>Sertifikat</Link>
          <Link to={"/contact"} className='text-[#696c6d] hover:text-primary transition'>Kontak</Link>
        </nav>
      </div>
      {/* Socials */}
      <Socials/>
      {/* MobileNav */}
      <MobileNav/>
      
    </header>
  ) ;
};

export default Header;
