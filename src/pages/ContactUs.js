import React from 'react'
import { Contact, PageHero } from '../components'

const ContactUsPage = () => {
  return <main>
    <PageHero title="contact us" />
      <Contact heading={false}/>
  </main>
}

export default ContactUsPage
