import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import stageDecor from '../assets/stageDecor.jpg'

const PrivacyPolicyPage = () => {
  return <main>
    <PageHero title="privacy policy" />
    <Wrapper className="page section section-center">
      <img src={stageDecor} alt="stage decor" loading='lazy' />
      <article>
        <div className="title">
          <h1>Privacy Policy</h1>
          <div className="underline"></div>
        </div>
        <p>
          Mahaveer Flowers respects your privacy and is committed to safeguarding your personal information. This privacy statement describes how we collect, use, and share information about you when you visit our website.
        </p>
        <p>
          <b>Information we collect: </b>
          We automatically gather certain information about your device when you access our website, such as your web browser, IP address, and time zone. Furthermore, while you visit our website, we gather information about the particular web pages or goods you see, what websites or search keywords sent you to our website, and how you interact with our website. This automatically obtained data is referred to as "Device Information."
        </p>
        <p> <b>Information Use: </b>
          We utilise the Device Information we gather to assist us check for possible risk and fraud (specifically, your IP address), as well as to enhance and optimise our website in general.
        </p>
        <p> <b>Information Sharing: </b>
          We may share your information with other parties to assist us in using it as mentioned above. For example, we utilise Netlify to operate our online store; you can find out more about how Netlify handles your Personal Information by visiting https://www.netlify.com/privacy/. We may also share your information in order to comply with relevant laws and regulations, to react to a subpoena, search warrant, or other legitimate request for information we receive, or to defend our rights in other ways.
        </p>
        <p> <b>Your Legal Rights: </b>
          You have the right to see the personal information we have on file for you and to request that it be changed, updated, or deleted. If you wish to exercise this right, please contact us using the details provided below.
        </p>
        <p> <b>Changes to the Privacy Policy: </b>
          We may amend this privacy statement from time to time to reflect changes in our practises or for other operational, legal, or regulatory reasons.
        </p>
        <p> <b>Please contact us at: </b>
          If you have any questions or would like to make a complaint regarding our privacy policies, please contact us by email at info@mahaveerflowers.in or by mail at Mahaveer Flowers, 1st floor, 116 Mahaveer Sadan, Bhuleshwar Road, Mumbai, Maharashtra 400002, India.
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
export default PrivacyPolicyPage
