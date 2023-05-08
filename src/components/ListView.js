import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LazyImage } from './LazyImage'
import { Ads } from './Ads';

const ListView = ({ products }) => {
  return (
    <Wrapper>
      {products.map((product) => {
        const { id, image, name, description } = product;
        return (
          <article key={id}>
            <LazyImage src={image} alt={name} loading='lazy' />
            <div >
              <h4>{name}</h4>
              <p>{description && description.substring(0, 150)}...</p>
              <Link to={`/products/${id}`} className='btn'>
                Details
              </Link>
            </div>

          </article>
        );
      })}
      <Ads />
    </Wrapper >
  );
};

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;
  justify-items: center;

  img {
    width: 25rem;
    display: block;
    height: 25rem;
    object-fit: contain;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }
  h4 {
    margin-bottom: 0.5rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }
  .btn {
    font-size: 0.5rem;
    padding: 0.25rem 0.5rem;
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`;

export default ListView;
