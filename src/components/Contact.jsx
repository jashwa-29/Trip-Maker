import React, { useState } from 'react'

const Contact = () => {
  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [numb , setNumb] = useState('')
  const [mess , setMess] = useState('')
  const [wrong , setWrong] = useState(0)

  const submitbtn = ()=>{
    if (name === "") {
      // alert("Please Enter Your Name")
      setWrong(1)
    }
    else if (email === "") {
      // alert("Please Enter Your E-mail ID")
      setWrong(2)
    }
    else if (numb === "") {
      // alert("Please Enter Your Phone Number")
      setWrong(3)
    }
    else if (mess === "") {
      // alert("Please Enter Your Queries or your Subject of message")
      setWrong(4)
    }
    else{
      setName('')
      setEmail('')
      setNumb('')
      setMess('')
      alert("your Message Sent Successfuly")
      setWrong(0)
    }



  }
  return (
    <div id='contact' className='py-[60px] pb-[160px] poppins'>
               
               <div className="w-[83%] mx-auto">
  <div className="main-contact rounded-[30px] mx-auto shadow-lg lg:w-[600px] w-[100%] p-[50px] h-auto poppins" data-aos="zoom-in-left"  data-aos-easing="ease-out-cubic" data-aos-duration="1000"
      data-aos-delay="200" >
    <div className="flex flex-col items-center w-[100%] gap-[25px]">
        <div className='flex flex-col items-center gap-3'>
        <h3 className='text-[27px] rubik text-[#FFDF00] font-bold '> Contact</h3>
        <h2 className='poppins font-bold text-[35px]'>Get in Touch with us</h2>
        </div>

      <input type="text" placeholder="Your Name" value={name} className={wrong=== 1 ?'border-red-700 placeholder:text-red-700 shadow-sm border-[1px] py-[20px] pl-[5px] w-[100%] rounded-[5px]':'shadow-sm border-[1px] py-[20px] pl-[5px] w-[100%] rounded-[5px]'} onChange={(e)=>setName(e.target.value)} />
      <input type="email" placeholder="Your Email Address" value={email} className={wrong=== 2 ?'border-red-700 placeholder:text-red-700 shadow-sm border-[1px] py-[20px] pl-[5px] w-[100%] rounded-[5px]':'shadow-sm border-[1px] py-[20px] pl-[5px] w-[100%] rounded-[5px]'} onChange={(e)=>setEmail(e.target.value)}/>
      <input type="number" placeholder="Your Contact Number" value={numb} className={wrong=== 3 ?'border-red-700 placeholder:text-red-700 shadow-sm border-[1px] py-[20px] pl-[5px] w-[100%] rounded-[5px]':'shadow-sm border-[1px] py-[20px] pl-[5px] w-[100%] rounded-[5px]'}  onChange={(e)=>setNumb(e.target.value)}/>
      <textarea rows="4" placeholder="Message" value={mess} className={wrong=== 4 ?'border-red-700 placeholder:text-red-700 shadow-sm border-[1px] py-[20px] pl-[5px] w-[100%] rounded-[5px]':'shadow-sm border-[1px] py-[20px] pl-[5px] w-[100%] rounded-[5px]'} onChange={(e)=>setMess(e.target.value)}></textarea>
      <button className="w-[100%] py-[13px] bg-green-900 rounded-[5px] text-[15px] text-white font-semibold" onClick={()=>submitbtn()}>Submit</button>
    </div>
  </div>
</div>


    
    </div>
  )
}

export default Contact