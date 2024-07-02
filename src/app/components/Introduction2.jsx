import React from 'react'

import equality from "../../../public/equality.png"
import city from "../../../public/city.png";
import siren from "../../../public/siren-on.png";
import completed from "../../../public/completed.png";
import Image from 'next/image';

const data = [{
    icon: equality,
    title: "Litigation and Alternative Dispute Resolution",
    description: "Representing clients in court and through arbitration or mediation to resolve disputes."
},
{
    icon: city,
    title: "Corporate Governance and Housekeeping",
    description: "Ensuring businesses comply with laws and regulations, maintaining corporate records, and advising on governance best practices."
},
{
    icon: siren,
    title: "Legal Risk Management",
    description: "Identifying, assessing, and mitigating legal risks to protect your business interests."
},
{
    icon: completed,
    title: "Business Compliance and Regulatory Advisory",
    description: "Advising on compliance with industry regulations and standards to avoid legal issues."
}]


const Introduction2 = () => {
  return (
    <div className='bg-[#EEEEEE]' data-aos="fade-down">
        <div className='max-w-[75rem] m-auto  flex gap-5 justify-between py-12 px-10 max-sm:px-5 pb-32 max-lg:flex-col'>
            <div className='flex flex-col gap-5 w-[45%] max-lg:w-full p-5 max-sm:text-center'>
                <h1 className='text-5xl text-gray-900 leading-normal hightlightText font-bold' data-aos="fade-up">Practice Areas/ Services</h1>
                <p className='text-gray-400 text-lg leading-normal' data-aos="fade-up">At Abril Law Office, we provide expert legal services across a wide range of practice areas. Our experienced attorneys are dedicated to delivering personalized and effective solutions for your unique legal needs.</p>
            </div>
            <div className='flex flex-wrap justify-between w-[55%] max-lg:w-full gap-5 max-md:gap-y-10'>
                {data.map((items, index) => (
                    <div 
                        key={index} 
                        className='flex flex-col gap-5  w-[45%] max-sm:w-full bg-white p-5 rounded-lg card-shadow ' 
                        data-aos="zoom-in" 
                        data-aos-delay={(index + 1) * 100}
                        data-aos-duration={(index + 1) * 100}
                    >
                        <Image alt='' className='w-10' src={items.icon}/>
                        <h1 className='font-semibold text-gray-800 hightlightText text-xl'>{items.title}</h1>
                        <p className='text-sm text-gray-400'>{items.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
    
  )
}

export default Introduction2