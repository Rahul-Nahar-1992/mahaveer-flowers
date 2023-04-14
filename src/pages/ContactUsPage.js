import React from 'react'
import { Contact, PageHero } from '../components'
import { Helmet } from 'react-helmet'

const ContactUsPage = () => {
  return <main>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Contact Us</title>
      <link rel="canonical" href="https://mahaveerflowers.in/contact-us" />
    </Helmet>
    <PageHero title="contact us" />
      <Contact heading={false}/>
  </main>
}

export default ContactUsPage
