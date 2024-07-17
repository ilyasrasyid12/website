import React, { useState } from 'react';

// import icons
import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";
// import link
import Socials from "./Socials"
import { Link } from "react-router-dom";
// link motion
import { motion } from "framer-motion"

//import social media
import {
  ImFacebook,
  ImTwitter,
  ImInstagram,
  ImYoutube,
} from "react-icons/im"

const menuVariants = {
  hidden: {
    x: '100%',
  },
  show: {
    x: 0,
    transition: {
      ease: "easeInOut", // Menggunakan nilai easing yang valid
    },
  },
};


const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav>
      {/* nav open button */}
      <div 
        onClick={() => setOpenMenu(true)}
        className='text-3xl cursor-pointer lg:hidden'>
        <CgMenuRight />
      </div>
      {/* menu */}
      <motion.div 
        variants={menuVariants}
        initial="hidden"
        animate={openMenu ? "show" : ""}
        className='bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20'>
        {/* icon */}
        <div 
          onClick={() => setOpenMenu(false)}
          className='text-4xl absolute z-30 left-4 top-14 text-primary cursor-pointer'>
          <IoMdClose />
        </div>

        {/* menu list */}
        <ul className='h-full flex flex-col justify-center items-center gap-y-8 text-primary font-primary font-bold text-3xl'>
          <li>
            <Link to='/'>Utama</Link>
          </li>
          <li>
            <Link to='/about'>Tentang</Link>
          </li>
          <li>
            <Link to='/portfolio'>Portofolio</Link>
          </li>
          <li>
            <Link to='/certificate'>Sertifikat</Link>
          </li>
          <li>
            <Link to='/contact'>Kontak</Link>
          </li>
          <div className='flex gap-x-4'>
            <li>
              <a href='https://www.facebook.com' target='_blank'><ImFacebook/></a>
            </li>
            <li>
              <a href='https://www.twitter.com' target='_blank'><ImTwitter/></a>
            </li>
            <li>
              <a href='https://www.instagram.com/ilyasrasyid._' target='_blank'><ImInstagram/></a>
            </li>
            <li>
              <a href='https://www.youtube.com' target='_blank'><ImYoutube/></a>
            </li>
          </div>
        </ul>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
