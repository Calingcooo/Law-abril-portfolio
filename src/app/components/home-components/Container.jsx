import React from 'react'
//components
import Header from '../Header'
import Introduction from './Introduction'
import Introduction2 from './Introduction2'
import Achievement from './Achievement'
import Question from './Question'
import Footer from '../Footer'
import Arrowup from '../Arrowup'

const Container = () => {
  return (
    <div className='relative overflow-hidden' id='home'>
        <Header />
        <Introduction />
        <Introduction2 />
        <Achievement />
        <Question />
        <Footer />
        <Arrowup to={"home"}/>
    </div>
  )
}

export default Container