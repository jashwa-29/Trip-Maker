import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [navbarBg, setNavbarBg] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarBg(true);
      } else {
        setNavbarBg(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${navbarBg ? 'bg-dark' : 'bg-transparent'} top-0 sticky z-50 transition-all duration-300`}>
      <div className='flex justify-between items-center w-[83%] mx-auto py-[15px]'>
        <a href="/" className='text-[28px] font-bold text-green-900'>Trip <span className='text-[#FFDF00]'>Makers</span></a>
        <ul className='hidden lg:flex gap-[30px] cursor-pointer text-[19px] font-semibold rubik'>
          {['home', 'about', 'destin', 'blog', 'contact'].map((item, index) => (
            <li key={index} className='relative group'>
              <Link to={item} smooth={true} offset={-150} duration={700}>{item.charAt(0).toUpperCase() + item.slice(1)}</Link>
              <span className='absolute bottom-0 left-0 w-full h-[2px] bg-[#FFDF00] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out'></span>
            </li>
          ))}
        </ul>
        <div onClick={toggleNav} className='lg:hidden z-30'>
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
        <div className={nav ? 'text-center fixed h-full w-full left-0 top-0 bg-green-900' : 'fixed left-[-100%] transition-all duration-300'}>
          <ul className='font-semibold text-[22px] space-y-8 mt-24 rubik text-white'>
            {['home', 'about', 'destin', 'blog', 'contact'].map((item, index) => (
              <li key={index}><Link to={item} smooth={true} offset={-150} duration={500} onClick={closeNav}>{item.toUpperCase()}</Link></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
