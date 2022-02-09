import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  return <Wrapper>
    <div className="section-center">
      <div className='title'>
        <h2>contact us</h2>
        <div className='underline'></div>
      </div>
      <div className="content service">
        <p>116, MAHAVEER SADAN
          KABUTAR KHANA CIRCLE, Bhuleshwar Road,
          NEAR RAM MANDIR,
          Mumbai, Maharashtra 400002
        </p>
        <div style={{ overflow: 'hidden', background: 'none !important', maxWidth: '100%' }}>
          <iframe
            title="map"
            width="600"
            height="500"
            id="gmap_canvas"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1886.7527854502293!2d72.82688963809264!3d18.95326688207639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf648d0ee98d%3A0xeb29e8e92cb17eb6!2sMahaveer%20Flowers!5e0!3m2!1sen!2sus!4v1644412058803!5m2!1sen!2sus"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0">
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
  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--clr-black);
  }
  .form-input {
    border-right: none;
    color: var(--clr-grey-3);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }
  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .form-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--clr-primary-5);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-black);
  }
  .submit-btn:hover {
    color: var(--clr-white);
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
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 15rem 0;
  }
`

export default Contact
