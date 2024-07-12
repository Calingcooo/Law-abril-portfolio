import React, { useState } from 'react'
import Image from 'next/image';
import Carousel from "react-simply-carousel";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";


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
    <div id='partner-intro' className='max-w-[75rem] w-full max-lg:px-10 max-lg:flex-col m-auto flex flex-col gap-14  px-14 py-20 '>
        <h1 className='text-gray-800 font-bold text-5xl hightlightText text-center'>Trusted by these Companies</h1>
        <CarouselDiv />
    </div>
  )
}

export default AttorneyPartner



const CarouselDiv = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  return <Carousel
    containerProps={{
      style: {
        width: "100%",
        justifyContent: "space-between",
        userSelect: "none",
        gap: 10
      }
    }}
    preventScrollOnSwipe
    swipeTreshold={60}
    activeSlideIndex={activeSlide}
    onRequestChange={setActiveSlide}
    forwardBtnProps={{
      children: <MdKeyboardArrowRight size={40}/>,
    }}
    backwardBtnProps={{
      children: <MdKeyboardArrowLeft size={40}/>,
    }}
    dotsNav={{
      show: true,
      itemBtnProps: {
        style: {
          height: 10,
          width: 10,
          borderRadius: "50%",
          background: "#EEEDEB",
          border: 0
        }
      },
      activeItemBtnProps: {
        style: {
          height: 10,
          width: 10,
          borderRadius: "50%",
          border: 0,
          background: "gray"
        }
      }
    }}
    itemsToShow={3}
    speed={400}
    centerMode
  > 
    {partnerCompany.map((partner, index) => (
      <div 
        key={index} 
        className='flex w-[20rem] justify-center items-center' 
        data-aos="zoom-in"
        data-aos-delay={(index + 1) * 100}
      >
        <Image className='w-60 ' alt='partnership' 
          key={index} 
          src={partner}
        /> 
      </div>
    ))}
</Carousel>
}