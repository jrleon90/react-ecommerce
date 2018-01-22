import R from 'ramda';

import {
    ADD_PRODUCT_TO_CART
} from '../actionTypes'

const initialState = [];

export default (state=initialState, {type,payload}) => {
    switch (type){
        case ADD_PRODUCT_TO_CART:
            return R.append(payload,state);
        default:
            return state;
    }
};