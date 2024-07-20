import React from 'react';
import Image from 'next/image';
import abrilLawLogo from "../../../../public/AbrilLawLogoLarge.png";

const PracticeIntroduction = () => {
  return (
    <div className='max-w-[75rem] max-lg:px-10 m-auto flex flex-col'>
        <div className='max-lg:flex-col flex items-start justify-between py-10 max-lg:gap-10'>
            <div className='w-[45%] max-lg:w-full flex flex-col gap-5 py-10'>
                <h1 className='text-4xl font-bold hightlightText text-gray-900'>Practice Areas</h1>
                <h2 className='text-xl font-bold text-gray-800 hightlightText'>Comprehensive Legal Services Tailored to Your Needs</h2>
                <p className='text-gray-800 text-sm'>Abril Law Office, takes pride in offering a wide array of legal services to address the diverse needs of our clients. Our experienced team specializes in various practice areas, ensuring that you receive expert advice and effective solutions tailored to your specific situation. Whether you are an individual seeking legal assistance or a business in need of comprehensive legal support, we are here to help you navigate the complexities of the legal landscape.</p>
            </div>
            <div className='w-[55%] flex max-md:w-full max-lg:w-[80%] justify-center'>
                <Image src={abrilLawLogo} className='w-[60%]'/>
            </div>
        </div>
    </div>
  )
}

export default PracticeIntroduction