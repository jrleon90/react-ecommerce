import R from 'ramda';

import {
    GET_PRODUCT_BY_ID_SUCCESS
} from '../actionTypes';

const initialState = {
    id: null
};

export default (state = initialState,{type, payload}) => {
    switch(type){
        case GET_PRODUCT_BY_ID_SUCCESS:
            return R.merge(state,{
               id: R.prop('id', payload)
            });
        default:
            return state;
    }
}