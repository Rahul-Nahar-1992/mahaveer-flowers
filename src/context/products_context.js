import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/products_reducer'
import data from '../products.json'
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
  GET_CATALOGS_BEGIN,
  GET_CATALOGS_SUCCESS,
  GET_CATALOGS_ERROR,
  GET_RELATED_PRODUCT_BEGIN,
  GET_RELATED_PRODUCT_ERROR,
  GET_RELATED_PRODUCT_SUCCESS
} from '../actions'

const initialState = {
  isSidebarOpen: false,
  products_loading: false,
  categories_loading: false,
  products_error: false,
  categories_error: false,
  products: [],
  featured_products: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: {},
  categories: [],
  related_products: [],
  related_products_error: false,
  related_products_loading: false
}

const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({type: SIDEBAR_OPEN})
  }
  const closeSidebar = () => {
    dispatch({type: SIDEBAR_CLOSE})
  }

  const fetchProducts = async () => {
    dispatch({ type: GET_PRODUCTS_BEGIN })
    
    try {
      const products = data.products;
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products })
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  }

  const fetchCategories = async () => {
    dispatch({ type: GET_CATALOGS_BEGIN })
    
    try {
      const categories = data.category;
      dispatch({ type: GET_CATALOGS_SUCCESS, payload: categories })
    } catch (error) {
      dispatch({ type: GET_CATALOGS_ERROR });
    }
  }

  const fetchSingleProduct = async (id) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });

    try {
      const singleProduct = data.products.find(i => i.id === id.toString());
      await fetchRelatedProducts(singleProduct.categoryId, singleProduct.id);
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct });

    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
  }

  const fetchRelatedProducts = async (categoryId, id) => {
    dispatch({ type: GET_RELATED_PRODUCT_BEGIN });

    try {
      const related_products = data.products.filter(i => i.categoryId === categoryId && i.id !== id);
      dispatch({ type: GET_RELATED_PRODUCT_SUCCESS, payload: related_products });

    } catch (error) {
      dispatch({ type: GET_RELATED_PRODUCT_ERROR });
    }
  }

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, [])

  return (
    <ProductsContext.Provider value={{...state, openSidebar, closeSidebar, fetchSingleProduct }}>
      {children}
    </ProductsContext.Provider>
  )
}
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext)
}
