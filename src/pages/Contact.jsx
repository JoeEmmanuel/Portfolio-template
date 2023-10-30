import React from 'react'
import ContactInfo from '../components/contact/ContactInfo'
import ContactForm from '../components/contact/ContactForm'

const Contact = () => {
  return (
    <section className='grid grid-cols-1 gap-20 lg:grid-cols-2'>
      <ContactInfo /> 
      <ContactForm />
    </section>
  )
}

export default Contact
