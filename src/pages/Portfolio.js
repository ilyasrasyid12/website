import React from 'react';
// import image portfolio
import Image1 from '../img/portfolio/1.png';
import Image2 from '../img/portfolio/2.png';
import Image3 from '../img/portfolio/3.png';
import Image4 from '../img/portfolio/4.png';
// import link
import { Link } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';

const Portfolio = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className='section'>
      <div className='container mx-auto h-full relative'>
        <div className='flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: '-50%' }}
            animate={{ opacity: 1, y: '0' }}
            exit={{ opacity: 0, y: '-50%' }}
            transition={transition1}
            className='flex flex-col lg:items-start'>
            <h1 className='h1'>
              Portofolio
            </h1>
            <p className='mb-12 xl:max-w-sm'>
            Ini adalah koleksi dari beberapa proyek terbaru yang telah saya kerjakan
            </p>
            <Link to={'/certificate'} className='btn mb-[30px] mx-auto lg:mx-0'>Sertifikat Saya</Link>
          </motion.div>
          {/* image grid */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={transition1}
            className='grid grid-cols-2 md:gap-2'>
            {/* image */}
            <div className='relative max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[300px] bg-accent'>
              <img className='object-cover h-full lg:h-[300px] hover:scale-110 transition duration-500' src={Image1} />
              <p className='absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2'>Re-Talk</p>
            </div>
            <div className='relative max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[300px] bg-accent'>
              <img className='object-cover h-full lg:h-[300px] hover:scale-110 transition duration-500' src={Image2} />
              <p className='absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2'>G-Plants</p>
            </div>
            <div className='relative max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[300px] bg-accent'>
              <img className='object-cover h-full lg:h-[300px] hover:scale-110 transition duration-500' src={Image3} />
              <p className='absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2'>AI-Trash</p>
            </div>
            <div className='relative max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[300px] bg-accent'>
              <img className='object-cover h-full lg:h-[300px] hover:scale-110 transition duration-500' src={Image4} />
              <p className='absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2'>Detection Trash</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
