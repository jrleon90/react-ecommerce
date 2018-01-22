import R from 'ramda';

import {
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCT_BY_ID_SUCCESS
} from '../actionTypes';

const initialState = {

};

export default (state = initialState, {type, payload}) => {
    switch(type){
        case GET_PRODUCTS_SUCCESS:
            const newValues = R.indexBy(R.prop('id'), payload);
            return R.merge(state, newValues);
        case GET_PRODUCT_BY_ID_SUCCESS:
            return R.assoc(payload.id, payload, state);
        default:
            return state;
    }
}