import React from 'react'
import blogone from '../assets/blog-1.png'
import blogtwo from '../assets/blog-2.png'
import blogthree from '../assets/blog-3.png'
import blogfour from '../assets/blog-4.png'
const Blog = () => {
  return (
    <div id='blog' className='bg-gray-50 py-[40px] lg:blog md:block hidden'>
        <div className='w-[83%] mx-auto'>
        <div className='flex flex-col items-center gap-2 text-center'>    
        <h3 className='text-[25px] rubik text-[#FFDF00] font-bold '> Blogs</h3>
            <h2 className='poppins font-bold text-[36px]'>Our Blogs</h2>
            <p className='lg:w-[880px] w-full pb-[18px] text-[#8A8787] lg:text-[16px] text-[12px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </p>
          </div>



          <div className="main-blog poppins flex flex-col items-center gap-12 mt-[30px] flex-wrap">
          <div className="blog-row flex justify-center items-center gap-16 flex-col lg:flex-row">

          <div className="blog-card lg:w-[600px] w-full h-auto lg:p-[25px] p-[50px] flex flex-col lg:flex-row  items-center gap-5 bg-white rounded-[30px] shadow-lg" data-aos="flip-left"  data-aos-easing="ease-out-cubic" data-aos-duration="1400"
      data-aos-delay="200">
                    <img src={blogone} alt="" className='w-full' />
                    <div className="blog-text  bg-none flex flex-col items-start gap-5">
                        <h3 className='text-[22px] font-semibold w-[380px]'>Lorem ipsum dolor sit amet consectetur adipisicing .</h3>
                        <p className='w-[310px] text-[16px] text-[#8A8787]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do consectetur adipiscing elit, sed do </p>
                        <a href="" className='underline text-[17px] font-medium'>Read More</a>
                    </div>
                </div>

                <div className="blog-card lg:w-[600px] w-full h-auto lg:p-[25px] p-[50px] flex flex-col lg:flex-row  items-center gap-5 bg-white rounded-[30px] shadow-lg" data-aos="flip-left"  data-aos-easing="ease-out-cubic" data-aos-duration="1400"
      data-aos-delay="200">
                    <img src={blogtwo} alt="" className='w-full' />
                    <div className="blog-text  bg-none flex flex-col items-start gap-5">
                        <h3 className='text-[22px] font-semibold w-[380px]'>Lorem ipsum dolor sit amet consectetur adipisicing .</h3>
                        <p className='w-[310px] text-[16px] text-[#8A8787]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do consectetur adipiscing elit, sed do </p>
                        <a href="" className='underline text-[17px] font-medium'>Read More</a>
                    </div>
                </div>

</div>

            <div className="blog-row flex justify-center items-center gap-16 flex-col lg:flex-row">

                <div className="blog-card lg:w-[600px] w-full h-auto lg:p-[25px] p-[50px] flex flex-col lg:flex-row  items-center gap-5 bg-white rounded-[30px] shadow-lg" data-aos="flip-left"  data-aos-easing="ease-out-cubic" data-aos-duration="1400"
      data-aos-delay="200">
                    <img src={blogthree} alt="" className='w-full' />
                    <div className="blog-text  bg-none flex flex-col items-start gap-5">
                        <h3 className='text-[22px] font-semibold w-[380px]'>Lorem ipsum dolor sit amet consectetur adipisicing .</h3>
                        <p className='w-[310px] text-[16px] text-[#8A8787]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do consectetur adipiscing elit, sed do </p>
                        <a href="" className='underline text-[17px] font-medium'>Read More</a>
                    </div>
                </div>

                <div className="blog-card lg:w-[600px] w-full h-auto lg:p-[25px] p-[50px] flex flex-col lg:flex-row  items-center gap-5 bg-white rounded-[30px] shadow-lg" data-aos="flip-left"  data-aos-easing="ease-out-cubic" data-aos-duration="1400"
      data-aos-delay="200">
                    <img src={blogfour} alt="" className='w-full' />
                    <div className="blog-text  bg-none flex flex-col items-start gap-5">
                        <h3 className='text-[22px] font-semibold w-[380px]'>Lorem ipsum dolor sit amet consectetur adipisicing .</h3>
                        <p className='w-[310px] text-[16px] text-[#8A8787]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do consectetur adipiscing elit, sed do </p>
                        <a href="" className='underline text-[17px] font-medium'>Read More</a>
                    </div>
                </div>

            </div>


            
          </div>
        </div>
    </div>
  )
}

export default Blog