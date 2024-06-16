import React from 'react'
import popone from '../assets/pop-1.png'
import poptwo from '../assets/pop-2.png'
import popthree from '../assets/pop-3.png'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Populardest = () => {

  var settings = {
   dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1

  };
  return (
    <div id='destin' className='w-[83%] mx-auto py-[100px] poppins'>
         
         <div className='flex flex-col items-center gap-2 text-center'>    
        <h3 className='text-[25px] rubik text-[#FFDF00] font-bold rubik '> Destinations</h3>
            <h2 className='poppins font-bold text-[36px]'>Popular Destinations</h2>
            <p className='lg:w-[880px] w-full pb-[18px] text-[#8A8787] lg:text-[16px] text-[12px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </p>
          </div>

          {/* <div className='flex flex-col lg:flex-row items-center justify-center lg:gap-[100px] gap-[50px] mt-5'>
         
            <div className='lg:w-[300px] w-full '>
                <img src={popone} alt="" className='w-full' />
               
            </div>
            <div  className='lg:w-[300px] w-full'>
                <img src={poptwo} alt="" className='w-full'  />
            </div>
            <div  className='lg:w-[300px] w-full'>
                <img src={popthree} alt="" className='w-full' />
            </div>
        
          </div>

 */}



          <div>
          <Slider {...settings} className='slider'>
            {/* <div></div> */}
          <div >
                <img src={popone} alt="" className='w-full trend-img' />
               
            </div>
            <div >
                <img src={poptwo} alt="" className='w-full trend-img'  />
            </div>
            <div>
                <img src={popthree} alt="" className='w-full trend-img' />
            </div>
            </Slider>
          </div>

    </div>
  )
}

export default Populardest