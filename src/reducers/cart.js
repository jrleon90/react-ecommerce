import R from 'ramda';

import {
    ADD_PRODUCT_TO_CART,
    REMOVE_PRODUCT_FROM_CART,
    ADD_ONE_PRODUCT_TO_CART,
    CLEAN_CART,
    REMOVE_ONE_PRODUCT_FROM_CART
} from '../actionTypes'

const initialState = [];

export default (state=initialState, {type,payload}) => {
    switch (type){
        case ADD_PRODUCT_TO_CART:
            return R.append(payload,state);
        case ADD_ONE_PRODUCT_TO_CART:
            return R.append(payload,state);
        case REMOVE_PRODUCT_FROM_CART:
            return R.without(R.of(payload), state);
        case REMOVE_ONE_PRODUCT_FROM_CART:
            return state.splice(R.indexOf(payload,state),1);
        case CLEAN_CART:
            return [];
        default:
            return state;
    }
};