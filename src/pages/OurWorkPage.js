import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import { videoLink } from '../../src/utils/constants'

const OurWorkPage = () => {
  return <main>
    <PageHero title="our work" />
    <Wrapper className="page section section-center">
      <article>
        <div className="title">
          <h1>our work</h1>
          <div className="underline"></div>
        </div>
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
