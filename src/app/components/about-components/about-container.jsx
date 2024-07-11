import React from 'react'
import Header from '../Header';
import Footer from '../Footer';
import Arrowup from '../Arrowup';
import AboutIntroduction from './about-introduction';
import AboutIntro2 from './about-intro-2';
import ContactForm from '../contact-form';

const AboutContainer = () => {
  return (
    <div className='flex flex-col relative duration-300 gap-10 overflow-hidden' id='about'>
        <Header />
        <AboutIntroduction />
        <AboutIntro2 />
        <ContactForm />
        <Footer />
        <Arrowup to={"about"}/>
    </div>
  )
}

export default AboutContainer;