import React from 'react'
import styled from 'styled-components'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

const Contact = () => {
  return <Wrapper>
    <div className="section-center">
      <div className='title'>
        <h2>meet us</h2>
        <div className='underline'></div>
      </div>
      <div className="content service">
        <div>
          <ul style={{ listStyleType: 'none' }}>
            <li>
              <FaInstagram />
              <a href="https://www.instagram.com/mahaveerflowers/"> Mahaveer Flowers</a>
            </li>
            <li>
              <FaWhatsapp />
              <a href="https://wa.me/917715056121/"> (91) 7715056121</a>
            </li>
          </ul>
        </div>
        <div className='underlineContact'></div>
        <div style={{ overflow: 'hidden', background: 'none !important', maxWidth: '100%' }}>
          <iframe
            title="map"
            id="gmap_canvas"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1886.7539458833778!2d72.82680505046605!3d18.953164267519238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf648d0ee98d%3A0xeb29e8e92cb17eb6!2sMahaveer%20Flowers!5e0!3m2!1sen!2sin!4v1644419694877!5m2!1sen!2sin"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0">
          </iframe>
        </div>

      </div>
    </div>
  </Wrapper>
}
const Wrapper = styled.section`
  background: var(--clr-grey-10);
  padding: 5rem 0;
  h3 {
    text-transform: capitalize;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-5);
  }
  .service {
    background: var(--clr-grey-9);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--radius);
    p {
      color: var(--clr-primary-2);
    }
  }
  iframe {
    height: 300px;
    width: 300px;
  }
  .content {
    display: grid;
    align-items: center;
    gap: 1rem;
    margin-top: 2rem;
    grid-template-columns: 1fr;
  }
  .underlineContact {
    width: 15rem;
    height: 0.05rem;
    background: #49a6e9;
    background: var(--clr-primary-5);
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: 992px) { 
    .underlineContact {
      width: 30rem;
    }   
    p {
      margin-bottom: 0;
    }
    iframe {
      height: 500px;
      width: 600px;
    }
    ul li{
      font-size: x-large;
    }
  }
`

export default Contact
