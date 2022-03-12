import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Filters, ProductList, Sort, PageHero } from '../components';
import { useLocation } from "react-router-dom";
import { useFilterContext } from '../context/filter_context';

const ProductsPage = () => {
  const myRef = useRef(null)
  const location = useLocation();
  const { updateFilters } = useFilterContext();

  useEffect(() => {
    if (location.state?.categoryId) {
      updateFilters({ target: { name: 'category', value: location.state.categoryId.toString() } })
    } else {
      updateFilters({ target: { name: 'category', value: 'all' } })
    }
    // eslint-disable-next-line
  }, [])

  const scrollToTop = () => {
    if (myRef.current) {
      window.scrollTo({
        left: 0,
        top: myRef.current.offsetTop,
        behavior: 'smooth'
      });
    }
  }

  return (
    <main>
      <PageHero title='products' />
      <Wrapper className='page' ref={myRef}>
        <div className='section-center products'>
          <Filters />
          <div>
            <Sort />
            <ProductList scrollToTop={() => scrollToTop()} />
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;

export default ProductsPage;
