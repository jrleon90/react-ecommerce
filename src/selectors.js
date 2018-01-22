import R from 'ramda';

export const getProductByIdSelector = (state, id) => R.prop(id, state.Products);

export const getProductsSelector = state => {
  //return R.map(id => getProductByIdSelector(state, id), state.ProductPage.ids);
    const applySearch = item => R.contains(state.ProductPage.search,R.prop('name',item));
    return R.compose(
     R.filter(applySearch),
     R.map(id => getProductByIdSelector(state, id))
    )(state.ProductPage.ids)
};

export const getTotalCartCountSelector = state => R.length(state.Cart);

export const getTotalCartPriceSelector = state => {
  return R.compose(
    R.sum,
    R.pluck('price'),
    R.map(id => getProductByIdSelector(state, id))
  )(state.Cart);
};