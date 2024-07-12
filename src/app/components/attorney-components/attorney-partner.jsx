import React from 'react'
import Image from 'next/image';
//partnerimage
import luelco from "../../../../public/luelco.jpeg";
import uppfi from "../../../../public/uppfi.jpg";
import diolazo from "../../../../public/Diolazo Press.jpg";
import amc from "../../../../public/amc.jpg";
import bombo from "../../../../public/bomboradyo.jpg";
import lawinLogo from "../../../../public/LawinLogo.png";
import nkr from "../../../../public/nkr.png";
import ojo from "../../../../public/ojo-majica.jpg";

const partnerCompany = [uppfi, luelco, diolazo, amc, bombo, lawinLogo, nkr, ojo];
const AttorneyPartner = () => {
  return (
    <div className='max-w-[75rem] w-full max-lg:px-10 max-lg:flex-col m-auto flex flex-col gap-10  px-14 py-20 '>
        <h1 className='text-gray-800 font-bold text-2xl hightlightText'>Trusted by these Companies</h1>
        <div className='flex justify-between items-center max-sm:justify-center w-full flex-wrap gap-10'>
              {partnerCompany.map((partner, index) => (
                <div 
                  key={index} 
                  className='w-60 flex justify-center' 
                  data-aos="zoom-in"
                  data-aos-delay={(index + 1) * 100}
                >
                  <Image className='' alt='partnership' 
                    key={index} 
                    src={partner}
                  /> 
                </div>
              ))}
        </div>
    </div>
  )
}

export default AttorneyPartner