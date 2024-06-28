import React from 'react'
//components
import Header from './Header'
import AboutIntroduction from './AboutIntroduction'
import AboutCareerHightLights from './AboutCareerHightLights'
import Footer from './Footer'
import Arrowup from './Arrowup'


const AboutContainer = () => {
  return (
    <div className='flex flex-col relative duration-300' id='about'>
        <Header />
        <AboutIntroduction />
        <AboutCareerHightLights />
        <Footer />
        <Arrowup to={"about"}/>
    </div>
   
  )
}

export default AboutContainer;
