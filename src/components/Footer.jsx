import React from 'react'
import Newsletter from './Newsletter'

const Footer = () => {
  return (
    <div  data-aos="zoom-in-down"      data-aos-easing="ease-out-cubic" data-aos-duration="1000"
    data-aos-delay="200" className='bg-gray-100 w-full'>
         <div className='w-[83%] mx-auto flex items-center justify-center  relative bottom-[80px]'>
            <Newsletter />
         </div>

         <div className='w-[83%] mx-auto'>
            <div className='footer-row poppins flex items-start justify-center gap-[70px] flex-wrap py-10 relative bottom-[30px]'>
          <div className="footer-logo flex flex-col items-start gap-3">
          <a href="//" className='text-[28px] font-bold text-green-900'>Trip <span className='text-[#FFDF00]'>Makers</span> </a>
          <p className='text-[#8A8787] text-[16px] lg:w-[400px] md:w-[400px] sm:w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, recusandae quasi? Quasi earum, maiores minus laboriosam itaque  architecto placeat,</p>
          </div>

          <div className="footer-about flex flex-col items-start gap-1">
            <h3 className='text-[20px] font-semibold pb-3'>About</h3>
            <a href="" className='text-[15px] text-[#8A8787]'>Loorem</a>
            <a href="" className='text-[15px] text-[#8A8787]'>Loorem</a>
            <a href="" className='text-[15px] text-[#8A8787]'>Loorem</a>
            <a href="" className='text-[15px] text-[#8A8787]'>Loorem</a>
            <a href="" className='text-[15px] text-[#8A8787]'>Loorem</a>
          </div>
          <div className="footer-catageory flex flex-col items-start gap-1">
            <h3 className='text-[20px] font-semibold pb-3'>Catageory</h3>
            <a href="" className='text-[15px] text-[#8A8787]'>Loorem</a>
            <a href="" className='text-[15px] text-[#8A8787]'>Loorem</a>
            <a href="" className='text-[15px] text-[#8A8787]'>Loorem</a>
            <a href="" className='text-[15px] text-[#8A8787]'>Loorem</a>
            <a href="" className='text-[15px] text-[#8A8787]'>Loorem</a>
          </div>
          <div className="footer-contact flex flex-col items-start gap-1">
            <h3 className='text-[20px] font-semibold pb-3'>Contact us</h3>
            <a href="" className='text-[15px] text-[#8A8787]'>PH : 54654213313</a>
            <a href="" className='text-[15px] text-[#8A8787]'>Gmail : tripmakers@gmail.com</a>
          </div>
          <div className="footer-follow flex flex-col items-start gap-1">
            <h3 className='text-[20px] font-semibold pb-3'>Follow us</h3>
            <div className='flex items-start gap-3'>
            <a href="" className='text-[30px] '><i class="bi bi-instagram"></i></a>
            <a href="" className='text-[30px]'><i class="bi bi-facebook"></i></a>
            <a href="" className='text-[30px]'><i class="bi bi-whatsapp"></i></a>
            </div>

          </div>
          
            </div>

         </div>
         <div className='bg-green-900 py-4 flex items-center justify-center'>
            <p className='text-[19px] text-white text-center'>Copyright © Web developer Jashwa- All rights reserved | 2024</p>
         </div>
    </div>
  )
}

export default Footer