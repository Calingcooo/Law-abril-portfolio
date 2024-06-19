import React from 'react'
import Image from 'next/image'
import callNow from "../../../public/call-img.png";
import callIcon from "../../../public/Call.png";

const Question = () => {
  return (
    <div>
      <div className='max-w-[75rem] m-auto flex items-center justify-between py-10 max-lg:flex-col max-lg:gap-10'>
              <div className='w-[65%] max-lg:w-full max-lg:px-5 max-lg:items-center flex flex-col gap-7 items-start'>
                  <h1 className='text-5xl font-bold text-gray-900'>Complex Questions?</h1>
                  <p className='text-gray-500 text-l'>Request a personalized budget for your legal issue. We will send you a couple of options within 24 hours. If you're our first customer, you'll receive a free consultation.</p>
            
                  <button className='flex gap-3 py-3 px-8 max-sm:w-full max-sm:justify-center bg-[#333333] items-center rounded-lg'>
                      <Image alt='call icon' src={callIcon}/>
                      <p className='text-white text-xl font-semibold'>Call now</p>
                  </button>
              </div>
              <div className='w-[35%] max-lg:w-full max-lg:px-5 flex justify-center'>
                  <Image alt='call now' src={callNow} className='rounded-bl-3xl max-lg:rounded-3xl'/>
              </div>
        </div>
    </div>
    
  )
}

export default Question