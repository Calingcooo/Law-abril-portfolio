import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import abrilfooterlogo from "../../../public/abril-footer-logo.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";


const footerLinks = {
    quickLink: {
        title: "Quick Links",
        companyItems: [{
            title: "Home",
            url: "/"
        }, {
            title: "Practice Areas",
            url: "/"
        }, {
            title: "About",
            url: "/"
        }, {
            title: "Attorney",
            url: "/"
        }, {
            title: "Contact",
            url: "/"
        }]
    }, 
}

const socialIcons = [
    {
        icon: <BiLogoGmail />,
        url: "https://mail.google.com/mail/u/0/?fs=1&to=recipient@example.com&tf=cm"
    },
    {
        icon: <FaFacebookF />,
        url: "https://www.facebook.com/francisdominick?mibextid=JRoKGi"
    },
    {
        icon: <FaInstagram />,
        url: "https://www.instagram.com/franzabz?igsh=MTMycHFxc3Vhb2Z2Mg%3D%3D&utm_source=qr"
    },
    {
        icon: <FaTwitter />,
        url: "https://x.com"
    },
]

// const faqAnswerQuestionData = [{
//     question: "FAQ 1",
//     hiddenAnswer: "FAQ 1 answer"
// }, {
//     question: "FAQ 2",
//     hiddenAnswer: "FAQ 2 answer"
// }, {
//     question: "FAQ 3",
//     hiddenAnswer: "FAQ 3 answer"
// }]

const Footer = () => {
    // const [isOptionDropdownOpen, setIsOptionDropdownOpen] = useState(null);

    // const handleOpenDropdown = (option) => {
    //     if (option === isOptionDropdownOpen) {
    //         setIsOptionDropdownOpen(null)
    //     } else {
    //         setIsOptionDropdownOpen(option);
    //     }
    // }


    return (
    <div className='bg-[#333333]'>
        <div className='max-w-[75rem] m-auto py-5'>
          <div className='py-20 flex justify-between px-5 max-md:flex-col gap-5'>
              <div className='w-[50%] max-md:w-full'>
                  <Image className='w-[20rem] max-md:w-full' alt='abril footer' src={abrilfooterlogo}/>
              </div>
              <div className='flex gap-5 text-white w-[50%] max-md:w-full max-md:flex-col max-md:items-start items-start justify-end max-md:gap-10 pt-10'>
                  <div className='flex flex-col gap-5 items-end text-right'>
                      <h3 className='max-md:text-2xl'>{footerLinks.quickLink.title}</h3>
                      <ul className='flex flex-col gap-2'>
                          {footerLinks.quickLink.companyItems.map((item, index) => (
                              <li className='max-md:text-xl' key={`company-${index}`}>
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