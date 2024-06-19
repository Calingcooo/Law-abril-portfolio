import React from 'react'
import Image from 'next/image'
import attyProfile from "../../../public/attyprofile.png";
import partnership from "../../../public/partnership.png";

const Introduction = () => {
  return (
    <div className=''>
      <div className='max-w-[75rem] max-lg:px-10 max-lg:flex-col m-auto flex items-center max-sm:text-center'>
        <div className='w-[60%] max-lg:w-full flex-col flex gap-7 max-sm:items-center'>
          <div className='flex gap-3 items-center'>
            <p className='bg-gray-800 text-white py-1 px-7 rounded-full'>
              New
            </p>
            <p className='text-gray-600'>Stay connected to upcomming & Recent jobs</p>
          </div>
          <div className='flex flex-col gap-10'>
            <h1 className='text-6xl font-bold max-sm:text-5xl text-gray-900'>Your Solution <br/> Legal Consultacy</h1>
            <p className='text-gray-600 text-xl'>
              We are here to help you take care of your legality <br /> with the best service especially for you.
            </p>
            <div className='flex w-full justify-start max-sm:justify-center'>
              <button className='bg-gray-800 text-white p-5 rounded-md uppercase'>Get started</button>
            </div>
            <p className='text-xl text-gray-400 pb-5 max-sm:hidden'>Trusted by 10+ companies in Philippines</p>
            <Image className='w-40 max-sm:hidden' alt='partnership' src={partnership}/>
          </div>
        </div>
        <div className='w-[40%] max-lg:w-[60%] max-md:w-[80%] max-sm:w-full flex flex-col justify-center relative px-5 max-sm:p-0'>
            <div className='flex flex-col h-full absolute w-full justify-center max-sm:justify-start items-center 
              before:w-[100%] before:max-sm:w-[110%] before:h-[65%] before:max-sm:h-[75%] before:bg-gray-300 before:rounded-full before:opacity-50 before:-z-10
              after:absolute after:top-[18%] after:max-sm:top-0 after:w-[80%] after:max-sm:w-[90%] after:h-[55%] after:max-sm:h-[65%] after:bg-gray-300 after:rounded-full after:opacity-50 after:-z-10'
            >
            </div>
            <Image alt='atty profile' src={attyProfile} className='max-h-[700px] max-w-[700px] w-full'/>
              <div className='flex flex-col justify-center text-center py-5'>
                <h1 className='font-bold text-xl'>
                  Francis Dominick P. Abril
                </h1>
                <p className='text-gray-400'>
                  -Lawyer
                </p>
              </div>
        </div>
    </div>
    </div>
    
  )
}

export default Introduction