import React from 'react'
import { FeaturedProducts, Hero, Contact, Categories, FeaturedVideos } from '../components'
const HomePage = () => {
  return <main>
    <Hero />
    <Categories />
    <FeaturedProducts />
    <FeaturedVideos />
    <Contact />
  </main>
}

export default HomePage
