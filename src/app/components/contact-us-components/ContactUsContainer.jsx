import React from 'react'
import Header from '../Header'
import Arrowup from '../Arrowup'
import Footer from '../Footer'
import ContactForm from '../contact-form'
import ContactIntroduction from './contact-introduction'
import ContactIntroduction2 from './contact-introduction2'

const ContactUsContainer = () => {
  return (
    <div className='flex flex-col relative duration-300 gap-10 overflow-hidden' id='contact'>
      <Header />
      <ContactIntroduction />
      <ContactIntroduction2 />
      <ContactForm />
      <Footer />
      <Arrowup to={"contact"}/>
    </div>
  )
}

export default ContactUsContainer