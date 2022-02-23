import React from 'react';
import { useProductsContext } from '../context/products_context';
import styled from 'styled-components';
import Error from './Error';
import Loading from './Loading';
import Product from './Product';

const RelatedProducts = () => {
  const { related_products_loading: loading, related_products_error: error, related_products: related } = useProductsContext();
  console.log(loading, error, related)
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  if (related.length === 0) {
    return <></>;
  }

  return (
    <Wrapper className='section'>
      <div className='title'>
        <h2>related products</h2>
        <div className='underline'></div>
      </div>
      <div className='section-center featured'>
        {related.slice(0, 3).map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default RelatedProducts;
