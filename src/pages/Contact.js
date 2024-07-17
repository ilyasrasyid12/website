import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import myImg from "../img/contact/1.jpg";
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';

const Contact = () => {
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return regex.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const email = e.target.user_email.value;

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid Gmail address.');
      return;
    }

    setEmailError('');

    emailjs.sendForm('service_95krtm9', 'template_xxxxxx', e.target, 'user_xxxxxx')
      .then((result) => {
        console.log(result.text);
        alert('Message Sent Successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to Send Message, Please Try Again');
      });

    e.target.reset(); // Reset form fields after submission
  };

  return (
    <motion.section 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={transition1} 
      className='section'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left'>
          {/* bg */}
          <div className='hidden lg:flex bg-[#eef7f9] absolute bottom-0 left-0 right-0 top-72 -z-10'></div>
          {/* text and form */}
          <motion.div 
            initial={{opacity: 0, y: '-50%'}}
            animate={{opacity: 1, y: '0'}}
            exit={{opacity: 0, y: '-50%'}}
            transition={transition1} 
            className='lg:flex-1 lg:pt-32 px-4'>
            <h1 className='h1'>
              Kontak Saya
            </h1>
            <p className='mb-12'>Saya senang mendengar dari Anda! Silakan hubungi saya melalui formulir kontak di halaman ini untuk diskusi lebih lanjut tentang proyek, kerjasama, atau pertanyaan lainnya. Saya siap membantu mewujudkan ide dan kebutuhan Anda dalam teknologi dan pengembangan</p>
            <form className='flex flex-col gap-y-4' onSubmit={sendEmail}>
              <div className='flex gap-x-10'>
                <input className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]' type='text' name='user_name' placeholder='Your Name' required />
                <input className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]' type='email' name='user_email' placeholder='Your Email' required />
              </div>
              {emailError && <p className='text-red-500'>{emailError}</p>}
              <textarea className='outline-none border-b border-b-primary h-[150px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879] resize-none' name='message' placeholder='Your Message' required />
              <button className='btn mx-auto mb-[30px] lg:mx-0 self-start' type='submit'>Send it</button>
            </form>
          </motion.div>
          {/* image */}
          <motion.div 
            initial={{scale: 0}}
            animate={{scale: 1}}
            exit={{scale: 0}}
            transition={transition1} 
            className='lg:flex-1'>
            <img src={myImg} alt="abstrack" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
