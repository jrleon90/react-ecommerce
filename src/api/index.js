import R from 'ramda';

import products from './products';
import categories from './categories';

export const getProducts = async () => {
    return new Promise((resolve,reject) => {
        resolve(products);
    })
};

export const getCategories = async () => {
    return new Promise((resolve, reject) => {
       resolve(categories);
    });
};

export const getProductById = async (id) => {
  return new Promise((resolve, reject) => {
     const product = R.find(R.propEq('id',id),products);
     resolve(product);
  });
};