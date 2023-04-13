import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import stageDecor from '../assets/stageDecor.jpg'

const DisclaimerPage = () => {
  return <main>
    <PageHero title="Disclaimer" />
    <Wrapper className="page section section-center">
      <img src={stageDecor} alt="stage decor" loading='lazy' />
      <article>
        <div className="title">
          <h1>Terms & Conditions</h1>
          <div className="underline"></div>
        </div>
        <p>
          The terms and restrictions for using the Mahaveer Flowers website are outlined in the disclaimer below. You agree to be bound by these terms and conditions by accessing or using this website. You should not use this website if you do not agree to these terms and conditions.
        </p>
        <p>
          The content on this website is provided solely for general information purposes. While we strive to keep the information up to date and correct, we make no express or implied representations or warranties of any kind, express or implied, about the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such material is thus entirely at your own risk.
        </p>
        <p>
          In no event shall we be liable for any loss or damage, whether direct, indirect, incidental, special, or consequential, or for any loss or damage whatsoever resulting from loss of data or profits arising out of or in connection with the use of this website.
        </p>
        <p>
          You can access websites not managed by Mahaveer Flowers by using this website to link to them. The characteristics, information, and accessibility of those websites are beyond our control. Any links provided are for convenience only and are not intended to be recommendations or endorsements of the content found there.
        </p>
        <p>
          Every effort is taken to maintain the website's availability and functionality. Mahaveer Flowers, however, disclaims all liability and is not responsible in the event that the website is momentarily inaccessible due to reasons without our control.
        </p>
        <p>
          Mahaveer Flowers retains the right, with or without prior notice, to make modifications to this website and these terms and conditions at any time. You accept to be bound by the revised terms and conditions by continuing to use this website after such changes have been made.
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
export default DisclaimerPage
