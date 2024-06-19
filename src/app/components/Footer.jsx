import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import abrilfooterlogo from "../../../public/abril-footer-logo.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const footerLinks = {
    company: {
        title: "Company",
        companyItems: [{
            title: "About",
            url: "/"
        }, {
            title: "Press",
            url: "/"
        }, {
            title: "Careers",
            url: "/"
        }, {
            title: "Contact",
            url: "/"
        }, {
            title: "Partners",
            url: "/"
        }]
    }, 
    support: {
        title: "Support", 
        supportItems: [{
            title: "Help Center",
            url: "/"
        }, {
            title: "Terms of service",
            url: "/"
        }, {
            title: "Legal",
            url: "/"
        }, {
            title: "Privacy Policy",
            url: "/"
        }, {
            title: "Status",
            url: "/"
        }]
    }
}

const socialIcons = [
    {
        icon: <BiLogoGmail />,
        url: "https://mail.google.com/mail/u/0/?fs=1&to=recipient@example.com&tf=cm"
    },
    {
        icon: <FaFacebookF />,
        url: "https://www.facebook.com"
    },
    {
        icon: <FaInstagram />,
        url: "https://www.instagram.com"
    },
    {
        icon: <FaTwitter />,
        url: "https://x.com"
    },
]

const Footer = () => {
    return (
    <div className='bg-[#333333]'>
        <div className='max-w-[75rem] m-auto py-5'>
          <div className='py-20 flex justify-between px-5 items-center max-md:flex-col'>
              <div className='w-[50%] max-md:w-full'>
                  <Image className='w-[20rem] max-md:w-full' alt='abril footer' src={abrilfooterlogo}/>
              </div>
              <div className='flex gap-5 text-white w-[50%] max-md:w-full max-md:flex-col  justify-between max-md:gap-10'>
                  <div className='flex flex-col gap-5'>
                      <h3 className='max-md:text-2xl'>{footerLinks.company.title}</h3>
                      <ul className='flex flex-col gap-2'>
                          {footerLinks.company.companyItems.map((item, index) => (
                              <li className='max-md:text-xl' key={`company-${index}`}>
                                  <Link href={item.url} >{item.title}</Link>
                              </li>
                          ))}
                      </ul>
                  </div>
                  <div className='flex flex-col gap-5'>
                      <h3 className='max-md:text-2xl'>{footerLinks.support.title}</h3>
                      <ul className='flex flex-col gap-2'>
                          {footerLinks.support.supportItems.map((item, index) => (
                              <li className='max-md:text-xl' key={`support-${index}`}>
                                  <Link href={item.url} >{item.title}</Link>
                              </li>
                          ))}
                      </ul>
                  </div>
              </div>
          </div>
          <div className='text-white flex justify-between items-center px-5 max-md:flex-col-reverse max-md:gap-5'>
            <p>© 2024 Abril Law Office. All rights reserved</p>
            <ul className='flex gap-5 items-center'>
                {socialIcons.map((social, index) => (
                    <Link key={index} href={social.url} >
                        <div className='bg-[#ffffff17] p-3 rounded-full'>
                            {social.icon}
                        </div>
                    </Link>
                ))}
            </ul>
          </div>
      </div>
    </div>
      
    )
  }
  

  

export default Footer