import R from 'ramda';

import {
    GET_CATEGORIES_SUCCESS
} from '../actionTypes';

const initialState = {

};

export default (state = initialState, {type, payload}) => {
    switch(type){
        case GET_CATEGORIES_SUCCESS:
            const newValues = R.indexBy(R.prop('id'), payload);
            return R.merge(state, newValues);
        default:
            return state;
    }
}