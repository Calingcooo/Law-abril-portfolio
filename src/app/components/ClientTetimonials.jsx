import React from 'react';
import Image from 'next/image';
import testimonialsImg from "../../../public/testimonials-image.png";

const ClientTetimonials = () => {
  return (
    <div className='max-w-[75rem] m-auto'>
      <div className='py-20'>
        <h1 className='text-center text-5xl font-bold text-gray-900 mb-5'>Clients Testimonial</h1>
        <div className='flex justify-between gap-5 max-lg:flex-col max-lg:gap-10'>
          <div className='flex flex-col justify-center w-[50%] max-lg:w-full max-lg:px-5 items-center gap-10'>
            <div className='bg-white flex flex-col shadow-chatbox rounded-lg px-3 py-5 text-center h-[12rem] justify-center relative max-md:gap-5 
                            before:w-10 before:h-10 before:absolute before:-bottom-3 before:left-1/2 before:transform before:-translate-x-1/2 before:rotate-45 before:bg-white shadow-chatbox-before'>
              <h2 className='font-semibold text-lg text-gray-900'>Incredible Experience</h2>
              <p className='text-sm text-gray-400 z-10'>We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the concept so quickly.</p>
            </div>
             <div className='flex items-center gap-5'>
                <Image alt='testimonials-image' src={testimonialsImg}/>
                  <div className='flex flex-col'>
                    <h1>Anya Tailor Joy</h1>
                    <p className='text-gray-500'>CEO, SF Industires</p>
                  </div>
              </div> 
          </div>
          <div className='flex flex-col justify-center w-[50%] max-lg:w-full max-lg:px-5 items-center gap-10'>
            <div className='bg-white flex flex-col shadow-chatbox rounded-lg px-3 py-5 text-center h-[12rem] justify-center relative max-md:gap-5
                            before:w-10 before:h-10 before:absolute before:-bottom-3 before:left-1/2 before:transform before:-translate-x-1/2 before:rotate-45 before:bg-white shadow-chatbox-before'>
              <h2 className='font-semibold text-lg text-gray-900'>Dependable, Responsive, Professional Partner</h2>
              <p className='text-sm text-gray-400 z-10'>Fermin Apps has collaborated with Landify team for several projects such as Photo Sharing Apps and Custom Social Networking Apps. The experience has been pleasant, professional and exceeding our expectations. </p>
            </div>
            <div className='flex items-center gap-5'>
              <Image alt='testimonials-image' src={testimonialsImg}/>
                <div className='flex flex-col'>
                  <h1>Sri Alam</h1>
                  <p className='text-gray-500'>CEO, Membagongkan GROUP</p>
                </div>
            </div>
          </div>
        </div>
      <div> 
      </div>
    </div>
  </div>  
  )
}

export default ClientTetimonials