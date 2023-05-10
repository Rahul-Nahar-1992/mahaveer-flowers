import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { blogs } from '../utils/constants'

const SingleBlogPage = () => {
  const { id } = useParams();
  const { name, image, description } = blogs.find(item => item.id === id)
  const markup = {__html: description}
  
  return (
    <Wrapper>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{id} - {name}</title>
        <link rel="canonical" href={`https://www.mahaveerflowers.in/blogs/${id}`} />
      </Helmet>
      <div className='blog'>
      <Link to="/blogs" className="btn" style={{
        marginBottom: '1rem'
      }}>
        {`<< back to blogs`}
      </Link>
        <div style={{
          textAlign: 'center'
        }}>
        <img className='blog-image' src={image} alt='artificial flowers' />
        </div>
        <section className='content'>
          <h3>{name}</h3>

          <div dangerouslySetInnerHTML={markup}>
          </div>

          <hr />
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .blog {
    margin: 2rem;
    max-width: 100%;
  }
  h3{
    text-align: center;
    padding: 1rem 0rem;
  }
  .blog-image {
    height: auto;
    max-width: 100%;
  }
  .blog .content ol{
    padding: 1rem;
  }
  .blog .content ol li{
    padding-bottom: 0.5rem;
  }
  .blog .content a{
    text-decoration: underline;
    color: red;
  }
  @media (max-width: 480px) {
    .blog-image {
      height: 22vh;
      width: auto;
    }
  }
`;

export default SingleBlogPage;
