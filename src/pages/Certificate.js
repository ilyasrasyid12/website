import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { transition1 } from '../transitions';

// Import CSS for slick slider
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Import images for the slider
import CertImg1 from '../img/sertifikat/1.jpg';
import CertImg2 from '../img/sertifikat/2.jpg';
import CertImg3 from '../img/sertifikat/3.jpg';
import CertImg4 from '../img/sertifikat/4.jpg';
import CertImg5 from '../img/sertifikat/5.jpg';
import CertImg6 from '../img/sertifikat/6.jpg';
import CertImg7 from '../img/sertifikat/7.jpg';
import CertImg8 from '../img/sertifikat/8.jpg';
import CertImg9 from '../img/sertifikat/9.jpg';
import CertImg10 from '../img/sertifikat/10.jpg';

const Certificate = () => {
  // Array to store certificate images
  const certificateImages = [
    CertImg1, CertImg2, CertImg3, CertImg4, CertImg5,
    CertImg6, CertImg7, CertImg8, CertImg9, CertImg10
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  return (
    <motion.section 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={transition1} 
      className='section overflow-x-hidden'>
      <div className='container mx-auto h-full'>
        {/* text & img wrapper */}
        <div className='flex flex-col h-full items-center justify-center text-center pt-16'>
          {/* text */}
          <motion.div 
            initial={{opacity: 0, y: '-50%'}}
            animate={{opacity: 1, y: '0'}}
            exit={{opacity: 0, y: '-50%'}}
            transition={transition1} 
            className='pt-36 pb-14 w-auto z-10 flex flex-col justify-center items-center'>
            <h1 className='h1'>
              Sertifikat
            </h1>
            <p className='xl:max-w-2xl px-1'>
            Anda dapat melihat beberapa sertifikat dan penghargaan yang saya peroleh dalam perjalanan profesional saya
            </p>
            <br/>
            <Link to={'/contact'} className='btn mb-2'>Kontak Saya</Link>
          </motion.div>
          {/* image slider */}
          <motion.div 
            initial={{scale: 0}}
            animate={{scale: 1}}
            exit={{scale: 0}}
            transition={transition1} 
            className='w-full max-w-4xl mx-auto'>
            <Slider {...settings} className='w-full'>
              {certificateImages.map((image, index) => (
                <div key={index} className='max-w-[300px] max-h-[300px] md:max-h-[450px] md:max-w-[450px] lg:max-h-[600px] lg:max-w-[600px] items-center justify-center'>
                  <img src={image} alt={`Certificate ${index + 1}`} className='object-cover w-full h-full'/>
                </div>
              ))}
            </Slider>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Certificate;
