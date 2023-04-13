import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Footer = () => {
  return <Wrapper>
    <div>
      <h5>
        &copy; {new Date().getFullYear()}
        <span> Mahaveer Flowers </span>
      </h5>
    </div>
    <div>
      <h6>
      <Link to='/privacy'>
        Privacy Policy
      </Link>
      </h6>

      <h6>
      <Link to='/legal/terms-of-use'>
      Terms & Conditions
      </Link>
      </h6>
    </div>
  </Wrapper>
}

const Wrapper = styled.footer`
  height: 4.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--clr-black);
  text-align: center;
  span {
    color: var(--clr-primary-5);
  }
  div {
  display: flex;
  justify-content: space-between;
  }
  h5 {
    color: var(--clr-white);
    margin: 0.1rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  h6 {
    color: var(--clr-white);
    margin: 0.1rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
`

export default Footer
