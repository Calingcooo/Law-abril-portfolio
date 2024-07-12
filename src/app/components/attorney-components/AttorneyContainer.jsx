import React from 'react'
//components
import Header from '../Header'
import AttorneyIntroduction from './AttorneyIntroduction'
import AttorneyCareerHightLights from './AttorneyCareerHightLights'
import Footer from '../Footer'
import Arrowup from '../Arrowup'
import AttorneyPartner from './attorney-partner'


const AttorneyContainer = () => {
  return (
    <div className='flex flex-col relative duration-300' id='attorney'>
        <Header />
        <AttorneyIntroduction />
        <AttorneyCareerHightLights />
        <AttorneyPartner />
        <Footer />
        <Arrowup to={"attorney"}/>
    </div>
   
  )
}

export default AttorneyContainer;
