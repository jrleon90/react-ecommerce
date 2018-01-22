import R from 'ramda';

import {
    GET_PRODUCTS_SUCCESS,
    SEARCH_PRODUCT
} from '../actionTypes'

const initialState = {
    ids: [],
    search: ''
};

export default (state = initialState, {type, payload}) => {
    switch(type){
        case GET_PRODUCTS_SUCCESS:
            return R.merge(state, {
                ids: R.pluck('id', payload)
            });
        case SEARCH_PRODUCT:
            return R.merge(state, {
                search: payload
            });
        default:
            return state;
    }
}