import React from 'react'

const Hero = () => {
  return (
    <div id='home' className='w-[83%] mx-auto flex items-center justify-center poppins lg:py-[130px] py-[50px]'  data-aos="zoom-out-right"  data-aos-easing="ease-out-cubic"
    data-aos-duration="1800">
        <div className='flex flex-col items-start gap-[19px] text-black'>
            <h1 className='font-bold lg:text-[58px] md:text-[58px] text-[30px] lg:w-[600px] w-auto md:w-[600px]'>Enjoy your holidays with <span className='text-green-900'>Trip</span> <span className='text-[#FFDF00]'>Makers</span>  </h1>
            <p className='lg:w-[600px] w-auto md:w-[600px] lg:text-[16px] md:text-[22px] sm:text-[13px] text-black-50'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, fugit consequuntur enim, qui nobis ugit consequuntur enim, qui nobis, ugit consequuntur enim, qui nobis,, soluta.</p>
            <button className='px-[30px] py-[15px] bg-green-900  text-[17px] font-medium rounded-[3px] text-white'>Explore More</button>
        </div>
        <div className='w-[40%] hidden lg:flex '>
                
        </div>
    </div>
  )
}

export default Hero