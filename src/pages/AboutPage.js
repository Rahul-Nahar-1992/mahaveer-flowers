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
          <h2>our story</h2>
          <div className="underline"></div>
        </div>
        <p>
          Artificial flowers offer a permanent sustainable source of beauty. We believe the joy of nature should never fade.
          We import premium quality products made of materials such as silk, natural woods, Polyurethane (PU) and a unique blend of fabrics ensuring both durability and quality.
        </p>
        <p>
          We believe in revamping our product mix from time to time ensuring better designs and abstain from monotony.
          Therefore, we always have some surprises in store for our customers and give them something to look forward to every few months.
          We maintain exclusivity by getting products custom made from factories conforming to the highest quality standards and greater consumer satisfaction.
          </p>
        <p>
          We try and stick to our main agenda which is to provide customers with a great experience by offering top quality, long lasting products and at the same time bring them closer to nature by providing real looking flowers and plants which are personally handpicked from multiple cities across borders.
          We believe in pushing ourselves beyond our limits and are in the lookout for the best quality of floral decor from across the globe to fulfil the growing demand for lifestyle products in our country.
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
