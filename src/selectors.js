import R from 'ramda';

export const getProductByIdSelector = (state, id) => R.prop(id, state.Products);

export const getActiveCategoryIdSelector = ownProps => R.path(['params','id'],ownProps);

export const getProductsSelector = (state, ownProps) => {
    const activeCategoryId = getActiveCategoryIdSelector(ownProps);

    const applyCategory = item => {
        switch(activeCategoryId){
            case 'price':
               return R.ascend(R.prop('price'));
            default:
                if(item.sublevel_id == activeCategoryId) {
                    return true;
                }
                return false;
        }


    };
    const applySearch = item => R.contains
    (state.ProductPage.search,
     R.prop('name',item)
    );

    return R.compose(
     R.filter(applySearch),
     R.when(R.always(activeCategoryId),R.filter(applyCategory)),
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

export const getCategoriesSelector = state => R.values(state.Categories);

export const getProductsCartWithCountSelector = state => {
  const productCount = id => R.compose(
    R.length,
    R.filter(cartId => R.equals(id, cartId)),
  )(state.Cart);
  const productWithCount = product => R.assoc('count',productCount(product.id),product);
  const uniqueIds = R.uniq(state.Cart);
  return R.compose(
    R.map(productWithCount),
    R.map(id => getProductByIdSelector(state, id))
  )(uniqueIds);
};