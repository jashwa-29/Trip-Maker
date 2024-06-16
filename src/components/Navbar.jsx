import React, { useState , useEffect } from 'react'
import { AiOutlineMenu  , AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-scroll'

const Navbar = () => {
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
            }
        
             else {
                setNavbarBg(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

  return (
    <div className={navbarBg ? 'top-0 sticky nav-bg-cl z-50' :'top-0 sticky z-50' }>
    <div id='navi' className='flex justify-between items-center w-[83%] mx-auto py-[15px]'>
          <a href="//" className='text-[28px] font-bold text-green-900'>Trip <span className='text-[#FFDF00]'>Makers</span> </a>
          <ul className='hidden lg:flex gap-[30px] cursor-pointer text-[19px] font-semibold rubik'>
          <li className='relative group'>
            <Link to='home' smooth={true} offset={-150} duration={700}>Home</Link>
            <span className='absolute bottom-0 left-0 w-full h-[2px] bg-[#FFDF00] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out'></span>
             </li>
             <li className='relative group'>
            <Link to='about' smooth={true} offset={0} duration={700}>About</Link>
            <span className='absolute bottom-0 left-0 w-full h-[2px] bg-[#FFDF00] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out'></span>
             </li>
             <li className='relative group'>
            <Link to='destin' smooth={true} offset={0} duration={700}>Destinations</Link>
            <span className='absolute bottom-0 left-0 w-full h-[2px] bg-[#FFDF00] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out'></span>
             </li>
             <li className='relative group'>
            <Link to='blog' smooth={true} offset={-40} duration={700}>Blogs</Link>
            <span className='absolute bottom-0 left-0 w-full h-[2px] bg-[#FFDF00] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out'></span>
             </li>
             <li className='relative group'>
            <Link to='contact' smooth={true} offset={-30} duration={700}>Contact</Link>
            <span className='absolute bottom-0 left-0 w-full h-[2px] bg-[#FFDF00] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out'></span>
             </li>
          
          </ul>
          <div onClick={()=>togglenav()} className=' lg:hidden z-30'>
              {
                nav ? <AiOutlineClose size={30}/> :  <AiOutlineMenu size={30}/> 

              }
          </div>
          <div className={nav ? 'text-center fixed h-full w-full  left-0 top-0 bg-green-900': 'fixed left-[-100%]'}>
            <ul className='font-semibold text-[22px] space-y-8 mt-24 rubic text-white'>
                <li><Link to='home' smooth={true} offset={-150} duration={500} onClick={()=>closenav()}>HOME</Link></li>
                <li><Link to='about' smooth={true} offset={0} duration={500} onClick={()=>closenav()}>ABOUT</Link></li>
                <li><Link to='destin' smooth={true} offset={0} duration={500} onClick={()=>closenav()}>DESTINATIONS</Link></li>
                <li className='hidden md:block'><Link to='blogs' smooth={true} offset={50} duration={500} onClick={()=>closenav()}>BLOGS</Link></li>
                <li><Link to='contact' smooth={true} offset={-30} duration={500} onClick={()=>closenav()}>CONTACT</Link></li>
            </ul>
          </div>
    </div>
    </div>

  )
}

export default Navbar