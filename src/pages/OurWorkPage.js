import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import { videoLink } from '../../src/utils/constants'
import { Helmet } from 'react-helmet'

const OurWorkPage = () => {
  return <main>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Our Work</title>
      <link rel="canonical" href="https://www.mahaveerflowers.in/our-work" />
    </Helmet>
    <PageHero title="our work" />
    <Wrapper className="page section section-center">
      <article class="ourWork">
        <div className="title">
          <h1>our work</h1>
          <div className="underline"></div>
        </div>
        <p>
          Welcome to our portfolio, where we display some of our greatest work! Mahaveer Flowers takes pleasure in crafting magnificent and one-of-a-kind flower arrangements for a wide range of events and occasions. 
          Our team of talented specialists can convert any venue into a magnificent floral paradise, from weddings and business events to religious rituals and social gatherings.
        </p>
        <p>
          Browse our portfolio for examples of our most recent work and gain ideas for your next event. Our floral arrangements are made with only the greatest quality artificial flowers, assuring their beauty and durability for a long time.
        </p>
        <p>
          We think that every event deserves to be unforgettable, and we are dedicated to making your vision a reality. Contact us today to learn more about our services and how we can assist you in making your next event memorable.
        </p>
        <ul className='videos'>
          {
            videoLink.map((item, i) => (
              <li key={i}>
                {item.link}
              </li>
            ))
          }
        </ul>
      </article>
    </Wrapper>
  </main>
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  .videos {
    padding-top: 3rem;
      display: grid;
      gap: 2rem 1.5rem;
  }
  .ourWork p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 1rem;
    color: var(--clr-grey-5);
    font-size:1.25rem;
  }
  iframe {
    height: 20rem;
      width: 35rem;
      max-width: 100%;
      padding: 1rem;
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }

  @media (min-width: 576px) {
    .videos {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`
export default OurWorkPage
