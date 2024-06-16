import React from 'react'
import abiutimg from '../assets/about image.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {
  AOS.init();
  return (
    <div id='about' className='w-[83%] mx-auto flex   lg:flex-row flex-wrap  flex-col   justify-center items-center lg:gap-[100px] gap-[50px] lg:py-[130px] py-[60px]'>

        <div  data-aos="zoom-in-right"  data-aos-easing="ease-out-cubic" data-aos-duration="1400"
      data-aos-delay="200" className='lg:w-[400px] sm:w-full w-full'>
          <img src={abiutimg} alt="" className='w-full'/>
          </div>

          <div  data-aos="zoom-in-left"  data-aos-easing="ease-out-cubic"
     data-aos-duration="1800" className='flex items-start flex-col gap-4'>
            <h3 className='text-[27px] rubik text-[#FFDF00] font-bold '> About Us</h3>
            <h2 className='poppins font-bold lg:text-[40px] text-[33px] lg:w-[580px] w-full '>Investigate All the Corners 
                of World with us !</h2>
                <p className='lg:w-[580px] w-full  pb-[18px] text-[#8A8787] lg:text-[19px] text-[15px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex e.</p>
                <button className='px-[25px] py-[14px] text=[18px] rounded-[3px] bg-green-900 text-white font-semibold poppins'>Explore more</button>
          </div>

    </div>
  )
}

export default About