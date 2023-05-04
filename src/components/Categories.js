import React from 'react';
import { useProductsContext } from '../context/products_context';
import styled from 'styled-components';
import Error from './Error';
import Loading from './Loading';
import Category from './Category';
// import { Ads } from './Ads';

const FeaturedProducts = () => {
  const { categories_loading: loading, categories_error: error, categories } = useProductsContext();
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <Wrapper className='section'>
      <div className='title'>
        <h1>categories</h1>
        <div className='underline'></div>
      </div>
      <div className='section-center featured' style={{justifyItems: 'center'}}>
        {/* <Ads /> */}
        {categories.map((category) => {
          return <Category key={category.id} {...category} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 25rem;
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

export default FeaturedProducts;
