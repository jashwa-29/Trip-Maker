import React, { useState , useEffect } from 'react'
import { AiOutlineMenu  , AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-scroll'
import Navbar from './Navbar'
import Hero from './Hero'
import abiutimg from '../assets/about image.png'

const Heroheader = () => {
  const [nav , setnav] = useState(false)
  // const [nav, setNav] = useState(false)
  const [navbarBg, setNavbarBg] = useState(false)
  const togglenav = ()=>{
      setnav(!nav)
  }
  const closenav = ()=>{
      setnav(!true)
  }

  useEffect(() => {
      const handleScroll = () => {
          if (window.scrollY > 50) {
              setNavbarBg(true)
          } else {
              setNavbarBg(false)
          }
      }

      window.addEventListener('scroll', handleScroll)

      return () => {
          window.removeEventListener('scroll', handleScroll)
      }
  }, [])


  return (
    // <div className='nav-hero'>
    //   <Navbar />
    //   <Hero />
    // </div>
    <div className='nav-hero'>


<div className={navbarBg ? 'top-0 sticky nav-bg-cl' :'top-0 sticky' }>
    <div id='navi' className='flex justify-between items-center w-[83%] mx-auto py-[15px]'>
          <a href="//" className='text-[26px] font-bold'>LOGO</a>
          <ul className='hidden lg:flex gap-[30px] cursor-pointer text-[19px] font-semibold rubik'>
          <li className='relative group'>
            <Link to='home' smooth={true} offset={50} duration={500}>Home</Link>
            <span className='absolute bottom-0 left-0 w-full h-[2px] bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out'></span>
             </li>
             <li className='relative group'>
            <Link to='about' smooth={true} offset={50} duration={500}>About</Link>
            <span className='absolute bottom-0 left-0 w-full h-[2px] bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out'></span>
             </li>
             <li className='relative group'>
            <Link to='home' smooth={true} offset={50} duration={500}>Blogs</Link>
            <span className='absolute bottom-0 left-0 w-full h-[2px] bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out'></span>
             </li>
             <li className='relative group'>
            <Link to='home' smooth={true} offset={50} duration={500}>Contact</Link>
            <span className='absolute bottom-0 left-0 w-full h-[2px] bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out'></span>
             </li>
          
          </ul>
          <div onClick={()=>togglenav()} className=' md:hidden z-30'>
              {
                nav ? <AiOutlineClose size={30}/> :  <AiOutlineMenu size={30}/> 

              }
          </div>
          <div className={nav ? 'text-center fixed h-[60%] w-full left-0 top-0 bg-gray-600': 'fixed left-[-100%]'}>
            <ul className='font-semibold text-[22px] space-y-8 mt-24 rubic'>
                <li><Link to='home' smooth={true} offset={50} duration={500} onClick={()=>closenav()}>HOME</Link></li>
                <li><Link to='home' smooth={true} offset={50} duration={500} onClick={()=>closenav()}>ABOUt</Link></li>
                <li><Link to='home' smooth={true} offset={50} duration={500} onClick={()=>closenav()}>CONTACT</Link></li>
            </ul>
          </div>
    </div>
    </div>


    <div className='w-[83%] mx-auto flex items-center justify-center poppins py-[130px]'>
        <div className='flex flex-col items-start gap-[19px] text-gray-200'>
            <h1 className='font-bold text-[58px] w-[600px]'>Enjoy your holidays with tripmakers</h1>
            <p className='w-[600px] text-black-50'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, fugit consequuntur enim, qui nobis ugit consequuntur enim, qui nobis, ugit consequuntur enim, qui nobis,, soluta.</p>
            <button className='px-[30px] py-[15px] bg-green-900  text-[17px] font-medium rounded-[3px]'>Explore More</button>
        </div>
        <div className='w-[40%] hidden lg:flex '>
                
        </div>
    </div>




    </div>
  )
}

export default Heroheader