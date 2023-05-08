import React, { useState, useEffect } from 'react';
import { useFilterContext } from '../context/filter_context';
import GridView from './GridView';
import ListView from './ListView';

const ProductList = (state, props) => {
  const { filtered_products: products, grid_view } = useFilterContext();
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 8

  useEffect(() => {
    state.scrollToTop();
  }, [currentPage, state])

  useEffect(()=>{
    setCurrentPage(1);
  }, [products])

  if (products.length < 1) {
    return <h5 style={{ textTransform: 'none' }}>Sorry, no products matched your search..</h5>;
  }

  const handleClick = (id) => setCurrentPage(id)
  const handlePrevClick = () => setCurrentPage(currentPage - 1)
  const handleNextClick = () => setCurrentPage(currentPage + 1)

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem)

  // Logic for displaying page numbers
  const pageNumbers = []
  for (let i = Math.max(1, currentPage - 2); i <= Math.min(Math.ceil(products.length / itemsPerPage), currentPage + 2); i++) {
    pageNumbers.push(i)
  }

  const renderPageNumbers = pageNumbers.map(number => {
    const style = number === currentPage ? 'page-item active' : 'page-item'
    return (
      <li className={style}
        key={number}
        id={`li-${number}`}
        onClick={()=>handleClick(number)}>
        <button className='page-link button-link' id={`btn-${number}`}>{number}</button></li>
    )
  })

  let container = !grid_view ? <ListView products={currentItems} /> : <GridView products={currentItems}>product list</GridView>
  return <>
    {container}
    {products.length > itemsPerPage &&
      <div style={{ marginTop: '2rem' }}>
        <div className='text-center'>
          <nav aria-label='Page navigation' className='text-center'>
            <ul className='pagination'>
              {currentPage !== 1 && <li className='page-item' key='prev' onClick={handlePrevClick}><button className='page-link button-link'>&lt;</button></li>}
              {renderPageNumbers}
              {currentPage !== Math.ceil(products.length / itemsPerPage) && <li className='page-item' key='next' onClick={handleNextClick}><button className='page-link button-link' href='#'>&gt;</button></li>}
            </ul>
          </nav>
        </div>
      </div>
    }
  </>
};

export default ProductList;
