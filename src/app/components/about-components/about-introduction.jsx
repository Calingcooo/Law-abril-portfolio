import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import Image from 'next/image';
import about from "../../../../public/about.png";

const AboutIntroduction = () => {
    const locationData = ["UP Diliman, Quezon City", "Sablan, Benguet", "Mangaldan, Pangasinan", "Tarlac City, Tarlac "];
  return (
    <div className='max-w-[75rem] max-lg:px-10 m-auto flex flex-col'>
        <div className='max-lg:flex-col flex items-center justify-between py-10 max-lg:gap-10'>
            <div className='w-[55%] max-lg:w-full flex flex-col gap-5'>
                <h1 className='text-4xl font-bold hightlightText text-gray-900'>About Us</h1>
                <h2 className='text-xl font-bold text-gray-800'>Embracing Modernity: </h2>
                <h3 className='font-semibold text-gray-800'>Transforming Legal Services for Today's World</h3>
                <p className='text-gray-800 text-sm'>From our roots as a Virtual Law Firm, we have expanded to a home office in Baguio City, and satellite desks </p>
                <ul className='flex flex-col gap-3'>
                    {locationData.map((location, index) => (
                        <li key={index} className='flex items-center gap-3 text-gray-800 text-sm'>
                            <FaLocationDot />
                            <p>{location}</p>
                        </li>
                    ))}
                </ul>
                <p className='text-gray-800 text-sm leading-loose'>dedicated to providing quality and convenience through technology. Our innovative approach ensures efficient solutions, setting us apart from traditional firms. Understanding our clients' needs, we offer flexible scheduling and virtual meetings via mobile phone calls, Zoom Meeting, Google Meet Conference calls, etc., saving valuable time and accommodating busy schedules of clients everywhere.</p>
            </div>
            <div className='w-[45%] flex justify-end max-md:w-full max-lg:w-[80%]'>
                <Image alt='image-about' className='w-[85%] max-lg:w-full' src={about}/>
            </div>
        </div>
        <p className='text-gray-800 text-sm leading-loose'>We recognize the importance of in-person meetings, especially for court appearances, representation in meetings and processes, depositions. However, our commitment to leveraging cutting-edge technology ensures quicker, more efficient outcomes. By staying current with legal advancements and embracing virtual practices, we deliver superior service, enhancing client satisfaction and success. Abril Law Office remains steadfast in its commitment to modern legal practices, and dedication to client convenience and efficiency.</p>
     
    </div>
  )
}

export default AboutIntroduction