import React from 'react'
import whyweimg from '../assets/whywe-img.png'
import guideimg from '../assets/guide-icon.png'
import bestprice from '../assets/bestprice-icon.png'
import entertainment from '../assets/enterntaiment-icon.png'



const Whatweare = () => {
  return (
    <div className='bg-gray-50'>
    <div className='w-[83%] mx-auto flex lg:flex-row flex-col items-center justify-center gap-[90px] py-[80px]'>
        <div className="why-we-are-text" data-aos="fade-down"
     data-aos-anchor-placement="top-center"        data-aos-easing="ease-out-cubic"
     data-aos-duration="1800">

          <div className='flex flex-col items-start gap-4'>    
        <h3 className='text-[27px] rubik text-[#FFDF00] font-bold '> What we Offer</h3>
            <h2 className='poppins font-bold text-[40px] lg:w-[580px] w-ful'>Best features from our side</h2>
            <p className='lg:w-[580px] w-full pb-[18px] text-[#8A8787] text-[19px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim labore et dolore magna aliqua.</p>
          </div>

          <div className='flex flex-col items-start gap-4'>


            <div className='flex items-center gap-3'>
              <img src={guideimg} alt=""  className='w-[90px]' />
              <div className='lg:w-[300px] w-full'>
                <h3 className='poppins font-semibold text-[20px]'>Best Tour Guide</h3>
                <p className=' text-[#8A8787] text-[15px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <img src={entertainment} alt=""  className='w-[90px]' />
              <div className='w-[300px]'>
                <h3 className='poppins font-semibold text-[20px]'>More Enterntainment</h3>
                <p className=' text-[#8A8787] text-[15px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <img src={bestprice} alt=""  className='w-[90px]' />
              <div className='w-[300px]'>
                <h3 className='poppins font-semibold text-[20px]'>Affordable Price</h3>
                <p className=' text-[#8A8787] text-[15px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
              </div>
            </div>


          </div>

        </div>
        <div data-aos="fade-up"
     data-aos-anchor-placement="top-center"    data-aos-duration="1000"
     data-aos-easing="ease-in-sine" className="why-img lg:w-[500px] w-full">
          <img src={whyweimg} alt="" />
        </div>
    </div>
    </div>

  )
}

export default Whatweare