import React from 'react';

//import images
import myImg from '../img/foto_sendiri/6.jpg';
//import link
import {Link} from 'react-router-dom'
//import motion
import {motion} from 'framer-motion'
//import transition
import { transition1 } from '../transitions'

const About = () => {
  return (
    <motion.section 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={transition1} 
      className='section'>
      <div className='container mx-auto h-full relative'>
        {/* text & img wrapper */}
        <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
          {/* image */}
          <motion.div 
            initial={{scale: 0}}
            animate={{scale: 1}}
            exit={{scale: 0}}
            transition={transition1} 
            className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none lg:max-w-[600px]'>
            <img src={myImg}></img>
          </motion.div>
          {/* text */}
          <motion.div 
            initial={{opacity: 0, y: '-50%'}}
            animate={{opacity: 1, y: '0'}}
            exit={{opacity: 0, y: '-50%'}}
            transition={transition1} 
            className='flex-1 pt-36 pb-14 lg:pt-0  lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'>
            <h1 className='h1'>
              Tentang Saya
            </h1>
            <p className='xl:max-w-sm'>
                Selamat datang di halaman ini! Saya adalah seorang pengembang full-stack serta AI Software Engineer dengan kecintaan mendalam pada teknologi dan inovasi. 
            </p>
            <br/>
            <p className='mb-12 xl:max-w-sm'>
               Dengan pengalaman dalam membangun solusi kreatif dan efektif, saya berkomitmen untuk memberikan yang terbaik dalam setiap proyek. Mari kita jelajahi lebih dalam tentang bagaimana saya dapat membantu mewujudkan ide dan visi Anda.
            </p>
            <Link to={'/portfolio'} className='btn'>Portofolio Saya</Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
