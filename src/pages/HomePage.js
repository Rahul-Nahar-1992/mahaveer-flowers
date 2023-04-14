import React from 'react'
import { FeaturedProducts, Hero, Contact, Categories, FeaturedVideos } from '../components'
import { Helmet } from 'react-helmet'

const HomePage = () => {
  return <main>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Mahaveer Flowers | Buy Artificial Flowers Online in India</title>
      <link rel="canonical" href="https://mahaveerflowers.in/" />
    </Helmet>
    <Hero />
    <Categories />
    <FeaturedProducts />
    <FeaturedVideos />
    <Contact />
  </main>
}

export default HomePage
