"use client"
import React, { useEffect, useState } from 'react'
import Logo from './Logo'
import Nav from './Nav'
import { IoIosSearch } from "react-icons/io";
import { AiOutlineMenu, AiOutlineClose  } from "react-icons/ai";
import clsx from 'clsx';
import { AiOutlineTwitter } from "react-icons/ai";
import { IoIosBasketball } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { AiFillYoutube } from "react-icons/ai";
import { useMediaQuery } from '../utility/useMediaQuery';

const socialData = [{
  url: "/",
  icon: <IoLogoInstagram size={25}/>,
  title: "Instagram"
}, {
  url: "/",
  icon: <IoIosBasketball size={25}/>,
  title: "Ball"
}, {
  url: "/",
  icon: <AiOutlineTwitter size={25}/>,
  title: "Twitter"
}, {
  url: "/",
  icon: <AiFillYoutube size={25}/>,
  title: "Youtube"
}]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  useEffect(() => {
    if (isSmallDevice) {
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(true)
    }
  }, [isSmallDevice]);

  const handleMenuOpen = () => {
    setIsMenuOpen((prev) => !prev)
  }

  return (
    <div className=''>
      <div className='max-w-[75rem] m-auto flex justify-between items-center py-5 max-lg:px-5'>
          <div className='flex items-center'>
              <Logo />
              <h2 className='font-semibold'>Abril Law Office</h2>
          </div>

         
          <div className={clsx("flex items-center gap-3", { "hidden": !isMenuOpen,  "flex-col-reverse fixed h-[70vh] rounded-lg bg-[#333333e5] inset-5 z-10 justify-evenly !items-start px-10 gap-5": isMenuOpen && isSmallDevice})}>
            {isMenuOpen && isSmallDevice &&
              <div className='flex flex-col gap-5'>
                <p className='text-white'>Contact</p>
                <ul className='flex gap-3 items-center'>
                  {socialData.map((social, index) => (
                    <li key={index} className='text-white bg-[#5f5e5e9f] p-3 rounded-full'>
                      {social.icon}
                    </li>
                  ))}
                </ul>
              </div>
            }
            
            <Nav isMenuOpen={isMenuOpen} isSmallDevice={isSmallDevice}/>
            <div className={clsx('flex items-center gap-5', {
              "bg-white p-2 rounded-full w-full mt-5": isMenuOpen && isSmallDevice
            })}>
              <IoIosSearch className='cursor-pointer' size={25}/>
              <input type="text" className='border-none outline-none' placeholder='Search'/>
            </div>
       
            
          </div>
   
          
          {isSmallDevice && (
            <div className='cursor-pointer z-10'>
              {isMenuOpen ? (
                <AiOutlineClose size={25} onClick={handleMenuOpen} className='text-white fixed right-10 top-10'/>
              ) : (
                <AiOutlineMenu size={25} onClick={handleMenuOpen} />
              )}
            </div>
            )
          }
      </div>
    </div>
    
  )
}

export default Header