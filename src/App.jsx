
import React, { useState , useEffect } from 'react'

import About from "./components/About"
import Hero from "./components/Hero"

import Navbar from "./components/Navbar"
import Whatweare from "./components/Whatweare"
import Populardest from './components/Populardest'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  // const [count, setCount] = useState(0)

  // const [nav, setNav] = useState(false)
  AOS.init();
  const [navbarBg, setNavbarBg] = useState(false)


  useEffect(() => {
      const handleScroll = () => {
          if (window.scrollY > 690) {
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
    <div className='transition-transform duration-300 ease-in-out'>
           {
      navbarBg === true ? (<Navbar />) : null
     }
   
     <div className="nav-hero ">
      {
        navbarBg === false ?  (<Navbar  />) : null
      }
     {/* <Navbar/> */}
     <Hero/>
     </div>


  
     <About/>
     <Whatweare />
     <Populardest />
     <Blog />
     <Contact />
     <Footer/>
     
    </div>
  )
}

export default App
