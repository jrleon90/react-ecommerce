import {
    GET_PRODUCTS_START,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILURE,
    GET_CATEGORIES_START,
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_FAILURE,
    GET_PRODUCT_BY_ID_START,
    GET_PRODUCT_BY_ID_SUCCESS,
    GET_PRODUCT_BY_ID_FAILURE,
    ADD_PRODUCT_TO_CART,
    SEARCH_PRODUCT
} from '../actionTypes';
import {
    getProducts as getProductsApi,
    getCategories as getCategoriesApi,
    getProductById as getProductByIdApi
} from '../api'

export const getProducts = () => async dispatch =>{
    dispatch({type: GET_PRODUCTS_START});

    const products = await getProductsApi();

    try {
        dispatch({
            type: GET_PRODUCTS_SUCCESS,
            payload: products
        })
    } catch(err) {
        dispatch({
            type: GET_PRODUCTS_FAILURE,
            payload: err,
            error: true
        })
    }
};

export const getCategories = () => async dispatch =>{
    dispatch({type: GET_CATEGORIES_START});

    const categories = await getCategoriesApi();

    try {
        dispatch({
            type: GET_CATEGORIES_SUCCESS,
            payload: categories
        })
    } catch(err) {
        dispatch({
            type: GET_CATEGORIES_FAILURE,
            payload: err,
            error: true
        })
    }
};

export const getProductById = id => async dispatch => {
  dispatch({type: GET_PRODUCT_BY_ID_START});

  try {
    const product = await getProductByIdApi(id);
    dispatch({
        type: GET_PRODUCT_BY_ID_SUCCESS,
        payload: product
    });
  }catch(err){
    dispatch({
       type: GET_PRODUCT_BY_ID_FAILURE,
       payload: err,
       error: true
    });
  }
};

export const addProductToCart = id => dispatch => {
    dispatch({
        type: ADD_PRODUCT_TO_CART,
        payload: id
    })
};

export const searchProduct = text => dispatch =>{
    dispatch({
        type: SEARCH_PRODUCT,
        payload: text
    })
};