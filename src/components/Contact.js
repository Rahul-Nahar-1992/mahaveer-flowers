import React, { lazy } from 'react';
import styled from 'styled-components'

const FaInstagram = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaInstagram })));
const FaWhatsapp = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaWhatsapp })));
const AiOutlineMail = lazy(() => import('react-icons/ai').then(module => ({ default: module.AiOutlineMail })));

const Contact = (heading) => {
  return <Wrapper>
    <div className="section-center">
      {
        heading === true ?
          <div className='title'>
            <h2>meet us</h2>
            <div className='underline'></div>
          </div> :
          <></>
      }
      <div className="contact">
        <div>
          <iframe
            title="map"
            id="gmap_canvas"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1886.7539458833778!2d72.82680505046605!3d18.953164267519238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf648d0ee98d%3A0xeb29e8e92cb17eb6!2sMahaveer%20Flowers!5e0!3m2!1sen!2sin!4v1644419694877!5m2!1sen!2sin"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            loading="lazy">
          </iframe>
        </div>
        <div>
          <div className='contact-title'>
            <h4>contact us via</h4>
            <div className='underline'></div>
          </div>
          <ul style={{ listStyleType: 'none', paddingTop: '1rem' }}>
            <li>
              <FaWhatsapp />
              <a href="https://wa.me/917715056121/" target="_blank" rel="noreferrer"> (91) 7715056121</a>
            </li>
            <li>
              <FaInstagram />
              <a href="https://www.instagram.com/mahaveerflowers/" target="_blank" rel="noreferrer"> Mahaveer Flowers</a>
            </li>
            <li>
              <AiOutlineMail />&nbsp;<a href="mailto:info@mahaveerflowers.in" target="_blank" rel="noreferrer">info@mahaveerflowers.in</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Wrapper >
}
const Wrapper = styled.section`
  background: var(--clr-grey-10);
  padding: 5rem 0;
  p {
    line-height: 2;
    max-width: 45em;
  }
  h2 {
    text-transform: capitalize;
  }
  .contact {
    padding: 2rem;
    margin: 4rem auto;
    align-items: center;
    display: grid;
    background: var(--clr-grey-9);
    text-align: center;
    border-radius: var(--radius);
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  iframe {
    height: 20rem;
    width: 20rem;
    max-width: 100%;
  }
  .contact-title {
    text-align: center;
  }
  .contact-title .underline {
    width: 8rem;
    height: 0.2rem;
    background: #49a6e9;
    background: var(--clr-primary-5);
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: 576px) {
    .contact {
      grid-template-columns: repeat(auto-fit, minmax(0px, 1fr));
    }
  }
  @media (min-width: 992px) {   
    iframe {
      height: 32rem;
      width: 38rem;
      max-width: 100%;
    }
    ul li{
      font-size: x-large;
    }
  }
`

export default Contact
