import React from 'react';
import styled from 'styled-components';
import Product from './Product';

const GridView = ({ products }) => {
  return (
    <Wrapper>
      <div className='products-container'>
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  img {
    height: 25rem;
    width: 17rem;
  }

  .products-container {
    display: grid;
    gap: 2rem;
    justify-items: center
  }

  @media (min-width: 576px) {
    .products-container {
      grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
    }
  }
`;

export default GridView;
