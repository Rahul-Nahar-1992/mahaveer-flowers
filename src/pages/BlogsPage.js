import React from 'react';
import { BlogList, PageHero } from '../components';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

const BlogsPage = () => {

  const scrollToTop = () => {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <main>
      <Helmet>
      <meta charSet="utf-8" />
      <title>Blogs</title>
      <link rel="canonical" href="https://www.mahaveerflowers.in/blogs" />
      </Helmet>
      <PageHero title='blogs' />
      <Wrapper className="page">
        <div className='section-center blogs'>
          <BlogList scrollToTop={() => scrollToTop()} />
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

export default BlogsPage;
