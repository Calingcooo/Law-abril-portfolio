import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import abrilfooterlogo from "../../../public/abril-footer-logo.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";


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

const contactData = [{
    icon: <IoCall />,
    content: "0906-968-0910",
}, {
    icon: <MdEmail />,
    content: "inquiry@abrillawoffice.com"
}, {
    icon: <MdEmail />,
    content: "fdpabril.law@gmail.com"
}]

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
              <div className='flex gap-10 text-white w-[50%] max-md:w-full max-lg:flex-col max-lg:items-center  items-start justify-between max-md:gap-10 pt-10'>
                  <div className='flex flex-col gap-5 items-end max-lg:items-center max-sm:items-start text-right max-lg:text-center max-sm:text-left pt-5'>
                      <h3 className='max-md:text-2xl'>{footerLinks.quickLink.title}</h3>
                      <ul className='flex flex-col gap-2'>
                          {footerLinks.quickLink.companyItems.map((item, index) => (
                              <li className='max-md:text-xl' key={`company-${index}`}>
                                  <Link href={item.url} >{item.title}</Link>
                              </li>
                          ))}
                      </ul>
                  </div>
                  <div className='flex flex-col gap-5'>
                        {contactData.map((data, index) => (
                            <div key={index} className='p-5 flex items-center gap-5 footer-card-shadow rounded-md'>
                                <div className='bg-[#ffffff17] p-3 rounded-full'>
                                    {data.icon}
                                </div>
                                <p>{data.content}</p>
                            </div>
                        ))}
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