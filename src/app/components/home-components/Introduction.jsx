import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import attyProfile from "../../../../public/attyprofile.png";
//partnerimage
import luelco from "../../../../public/luelco.jpeg";
import uppfi from "../../../../public/uppfi.jpg";
import diolazo from "../../../../public/Diolazo Press.jpg";


const partnerCompany = [luelco, uppfi, diolazo];

const Introduction = () => {
  return (
    <div className='' >
      <div className='max-w-[75rem] max-lg:px-10 max-lg:flex-col m-auto flex items-center max-sm:text-center'>
        <div className='w-[60%] max-lg:w-full flex-col flex gap-7 max-sm:items-center'>
          <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-10' data-aos="fade-up">
              <h1 className='text-6xl font-bold max-sm:text-5xl text-gray-900 hightlightText'>Your Trusted Partner in Legal Matters</h1>
              <p className='text-gray-600 text-xl poppins-normal'>
                Strategic legal solutions for individuals and businesses.
              </p>
              <div className='flex w-full justify-start max-sm:justify-center'>
                <button className='bg-gray-700 text-white p-5 rounded-md uppercase'>Get started</button>
              </div>
              <p className='text-xl text-gray-400 pb-5 max-sm:hidden'>Trusted by 10+ companies in Philippines</p>
            </div>
            <div className='grid grid-cols-3 gap-3 items-center'>
              {partnerCompany.map((partner, index) => (
                <div 
                  key={index} 
                  className={clsx('w-40', {
                    "flex justify-center": index === 1
                  })} 
                  data-aos="zoom-in"
                  data-aos-delay={(index + 1) * 100}
                >
                  <Image className={clsx('max-sm:hidden', {
                    "h-20 w-auto": index === 1
                    })} alt='partnership' 
                    key={index} 
                    src={partner}
                  /> 
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='w-[40%] max-lg:w-[60%] max-md:w-[80%] max-sm:w-full flex flex-col justify-center relative px-5 max-sm:p-0'>
            <div 
              data-aos="zoom-in" 
              data-aos-delay={300} 
              className='flex flex-col h-full absolute w-full justify-center max-sm:justify-start items-center 
                before:w-[100%] before:max-sm:w-[110%] before:h-[65%] before:max-sm:h-[65%] before:bg-gray-300 before:rounded-full before:opacity-50 before:-z-10
                after:absolute after:top-[18%] after:max-sm:top-0 after:w-[80%] after:max-sm:w-[95%] after:h-[55%] after:max-sm:h-[60%] after:bg-gray-300 after:rounded-full after:opacity-50 after:-z-10'
            >
            </div>
            <Image 
              alt='atty profile' src={attyProfile} 
              data-aos="zoom-in" 
              data-aos-delay={100}
              className='max-h-[700px] max-w-[700px] w-full'
            />
              <div className='flex flex-col justify-center text-center py-5 gap-3'>
                <h1 className='font-bold text-xl' data-aos="zoom-in">
                  Francis Dominick P. Abril
                </h1>
                <p className='text-gray-400' data-aos="zoom-in" data-aos-delay={200}> Attorney-at-Law</p>
                <p className='text-gray-400 text-xs' data-aos="zoom-in" data-aos-delay={200}>Supreme Court Roll of Attorneys No. 77343; </p>
                <p className='text-gray-400 text-xs' data-aos="zoom-in" data-aos-anchor-placement="bottom" data-aos-delay={200}>Admitted to the Philippine Bar on 07 May 2022.</p>
              </div>
        </div>
    </div>
    </div>
    
  )
}

export default Introduction