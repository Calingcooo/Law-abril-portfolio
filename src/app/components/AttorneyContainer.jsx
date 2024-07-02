import React from 'react'
//components
import Header from './Header'
import AttorneyIntroduction from './AttorneyIntroduction'
import AttorneyCareerHightLights from './AttorneyCareerHightLights'
import Footer from './Footer'
import Arrowup from './Arrowup'


const AttorneyContainer = () => {
  return (
    <div className='flex flex-col relative duration-300' id='about'>
        <Header />
        <AttorneyIntroduction />
        <AttorneyCareerHightLights />
        <Footer />
        <Arrowup to={"about"}/>
    </div>
   
  )
}

export default AttorneyContainer;
