import React from 'react'
import Header from '../Header'
import Arrowup from '../Arrowup'
import Footer from '../Footer'
import PracticeIntroduction from './practice-introduction'
import PracticeIntroduction2 from './practice-introduction2'
import PracticeServices from './practice-services'
import { PracticeIntroduction3 } from './practice-introduction2'
import PracticeSub from './practice-sub'

const PracticeAreaContainer = () => {
  return (
    <div className='flex flex-col relative duration-300 gap-10 overflow-hidden' id='practice-area'>
        <Header />
        <PracticeIntroduction />
        <PracticeIntroduction2 />
        <PracticeServices />
        <PracticeIntroduction3 />
        <PracticeSub />
        <Footer />
        <Arrowup to={"practice-area"}/>
    </div>
  )
}

export default PracticeAreaContainer