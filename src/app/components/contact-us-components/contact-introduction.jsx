import React from 'react'
import Image from 'next/image';
import emailContact from "../../../../public/emailContact.png";
import contactImg from "../../../../public/contactImg.png";

const ContactIntroduction = () => {
  return (
    <div className='flex flex-col max-w-[75rem] w-full max-lg:px-10 m-auto gap-20'>
        <div className='flex flex-col gap-5'>
            <h1 className='text-4xl font-bold hightlightText text-gray-900'>Contact Us</h1>
            <h2 className='text-xl font-semibold text-gray-700'>We're Here to Help</h2>
            <p className='text-gray-700'>Whether you have a question, need legal advice, or want to schedule a consultation, our team is ready to assist you. Get in touch with us today.</p>
        </div>
        <div className='flex justify-evenly w-full py-10 max-md:flex-col max-md:gap-10'>
            <div className='flex flex-col gap-3 card-shadow p-5 rounded-sm max-md:items-center max-md:py-10'>
                <Image src={emailContact}/>
                <p className='font-semibold hightlightText text-gray-800 text-lg'>Send an email at:</p>
                <p className='text-xs text-gray-700'>inquiry@abrillawoffice.com <br />| fdpabril.law@gmail.com</p>
            </div>
            <div className='flex flex-col gap-3 card-shadow p-5 rounded-sm max-md:items-center max-md:py-10'>
                <Image src={contactImg} />
                <p className='font-semibold hightlightText text-gray-800 text-lg'>Contact me at:</p>
                <p className='text-xs text-gray-700'> 0906-968-0910</p>
            </div>
        </div>
        
    </div>
  )
}

export default ContactIntroduction