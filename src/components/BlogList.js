import React, { useState, useEffect } from 'react';
import Blog from './Blog';
import styled from 'styled-components';
import { blogs } from '../utils/constants'

const BlogList = (state) => {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 8


  useEffect(() => {
    state.scrollToTop();
  }, [currentPage, state])

  const handleClick = (id) => setCurrentPage(id)
  const handlePrevClick = () => setCurrentPage(currentPage - 1)
  const handleNextClick = () => setCurrentPage(currentPage + 1)

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = blogs.slice(indexOfFirstItem, indexOfLastItem)

  // Logic for displaying page numbers
  const pageNumbers = []
  for (let i = Math.max(1, currentPage - 2); i <= Math.min(Math.ceil(blogs.length / itemsPerPage), currentPage + 2); i++) {
    pageNumbers.push(i)
  }

  const renderPageNumbers = pageNumbers.map(number => {
    const style = number === currentPage ? 'page-item active' : 'page-item'
    return (
      <li className={style}
        key={number}
        id={`li-${number}`}
        onClick={() => handleClick(number)}>
        <button className='page-link button-link' id={`btn-${number}`}>{number}</button></li>
    )
  })

  return <Wrapper>
    <div className='blogs-container'>
      {currentItems.map((blog) => {
        return <Blog key={blog.id} {...blog} />;
      })}
    </div>
    {blogs.length > itemsPerPage &&
      <div style={{ marginTop: '2rem' }}>
        <div className='text-center'>
          <nav aria-label='Page navigation' className='text-center'>
            <ul className='pagination'>
              {currentPage !== 1 && <li className='page-item' key='prev' onClick={handlePrevClick}><button className='page-link button-link'>&lt;</button></li>}
              {renderPageNumbers}
              {currentPage !== Math.ceil(blogs.length / itemsPerPage) && <li className='page-item' key='next' onClick={handleNextClick}><button className='page-link button-link' href='#'>&gt;</button></li>}
            </ul>
          </nav>
        </div>
      </div>
    }
  </Wrapper>
};

const Wrapper = styled.section`
  .blogs-container {
    margin-top: 1rem;
    display: grid;
    gap: 2rem;
    justify-items: center
  }

  @media (min-width: 820px) {
    .blogs-container {
      grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
    }
  }
`;

export default BlogList;
