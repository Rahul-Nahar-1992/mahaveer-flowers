import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import stageDecor from '../assets/stageDecor.jpg'

const AboutPage = () => {
  return <main>
    <PageHero title="about" />
    <Wrapper className="page section section-center">
      <img src={stageDecor} alt="stage decor" loading='lazy' />
      <article>
        <div className="title">
          <h1>our story</h1>
          <div className="underline"></div>
        </div>
        <p>
          Welcome to our website for artificial flowers! We are committed to supplying high-quality, gorgeous flowers to complement any setting.
        </p>
        <p>
          Our team is deeply committed to bringing nature indoors and making it available to everyone, regardless of location or lifestyle. We think that artificial flowers may provide the same aesthetic appeal and mood as genuine flowers without the bother and upkeep that live plants require.
        </p>
        <p>
          We obtain our items from the most recognized manufacturers (except for a few which we manufacturer ourselves) and designers, guaranteeing that each bloom is handcrafted with care and dedication to quality. Our collection includes everything from classic and timeless items to current and fashionable arrangements, helping our clients to discover the right fit for their personal style and preferences.
        </p>
        <p>
          We value customer happiness and endeavor to create a seamless buying experience on our artificial flower website. Our website is user-friendly and simple to use, with thorough product descriptions and photographs that highlight the distinctive characteristics of each flower. We also provide dependable shipping and a no-hassle return policy, allowing our clients to order with confidence.
        </p>
        <p>
          Thank you for taking the time to look at our artificial flower website for your floral requirements. With our wonderful variety of flowers, we strive to provide a touch of beauty and elegance to your home or business.
        </p>
      </article>
    </Wrapper>
  </main>
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 1rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
