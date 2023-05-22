import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { LazyImage } from './LazyImage'

const Blog = ({ image, name, id }) => {
  return <Wrapper>
    <div className="container">
      <Link to={`/blogs/${id}`}>
        <LazyImage src={image} alt={name} loading='lazy' />
      </Link>
    </div>

    <footer>
    <Link to={`/blogs/${id}`}>
      <h5>{name}</h5>
      </Link>
    </footer>
  </Wrapper >
}

const Wrapper = styled.article`
  img {
    width: 25rem;
    height: 15rem;
    object-fit: contain;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .container{
    text-align: center;
  }
  .container:hover img {
    opacity: 0.5;
  }
  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  footer h5 {
    margin-bottom: 0;
    font-weight: 400;
  }
`
export default Blog
