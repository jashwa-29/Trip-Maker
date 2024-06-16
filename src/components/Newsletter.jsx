import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full h-auto bg-white border-gray-100 border-[1px] shadow-lg rounded-[15px] flex flex-wrap items-center justify-center lg:gap-[200px] gap-[50px] py-[50px] poppins'>
        <div className="newsletter-content flex flex-col items-start gap-3">
        <h3 className='lg:text-[27px] md:text-[27px] text-[20px] rubik text-[#FFDF00] font-bold '> Our Community</h3>
        <h2 className='poppins font-bold lg:text-[35px] md:text-[35px] text-[21px]'>Join Our Newsletter</h2>
        </div>
        <div className='flex lg:flex-row md:flex-row flex-col items-end gap-6 lg:p-0 sm:p-5'>
            <div className='flex flex-col items-start gap-3'>
               <label htmlFor="" className='text-[22px] font-medium'>Enter Your Email Id</label>
               <input type="email"  placeholder='Your Email Id' className='lg:w-[350px] md:w-[350px] w-full shadow-sm rounded-[4px] border-[1px] border-gray-200 py-[13px] pl-4'/>
            </div>
            <button className='bg-green-900 text-white text-[16px] py-[11px] px-[30px] rounded-[3px]'>Subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter