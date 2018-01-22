import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import {
    getTotalCartCountSelector,
    getTotalCartPriceSelector
} from '../../selectors';

const ShoppingCart = ({totalCartCount,totalPrice}) =>{
    console.log(totalPrice);
        return(
          <div className='cart'>
              <div className='dropdown'>
                  <Link
                      to='/cart'
                      id='dLabel'
                      className='btn btn-inverse btn-block btn-lg'>
                      <i className='fa fa-fa-shopping-cart' />
                      <span> {totalCartCount} item(s) - ${totalPrice}</span>
                  </Link>
              </div>
          </div>
        );

};

const mapStateToProps = state => {
    return {
        totalCartCount: getTotalCartCountSelector(state),
        totalPrice: getTotalCartPriceSelector(state)
    }
};

export default connect(mapStateToProps)(ShoppingCart);