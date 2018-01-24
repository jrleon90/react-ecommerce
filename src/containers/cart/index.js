import React from 'react';
import {connect} from 'react-redux';
import R from 'ramda';
import {Link} from 'react-router';
import {Modal,ModalManager,Effect} from 'react-dynamic-modal'

import {
    removeProductFromCart,
    addOneProductToCart,
    addProductToCart,
    cleanCart,
    cartCheckout
} from '../../actions';

import {
    getProductsCartWithCountSelector,
    getTotalCartPriceSelector
} from '../../selectors';

const Cart = ({products, totalPrice, removeProductFromCart,cleanCart,cartCheckout}) => {
    const isCartEmpty = R.isEmpty(products);
    const renderContent = () => {
        return (
            <div>
                {isCartEmpty && <div>Your shopping cart is empty</div>}

                <div className='table-responsive'>
                    <table className='table-bordered table-striped table-condensed cf'>
                        <tbody>
                        {products.map((product, index) => (
                            <tr
                                key={index}
                                className='item-checkout'
                            >
                                <td className='first-column-checkout'>
                                    <img
                                        className='product-image'
                                        src={product.image}
                                        alt={product.name}
                                    />
                                </td>
                                <td>{product.name}</td>
                                <td>${product.price}</td>
                                <td><span className='glyphicon glyphicon-minus remove-product-in-cart' />
                                    {product.count}
                                    <button className='glyphicon glyphicon-plus add-product-in-cart'
                                        onClick={()=>alert(product.id)}
                                    />
                                    </td>
                                <td>
                    <span
                        className='delete-cart'
                        onClick={() => removeProductFromCart(product.id)}
                    />
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                {
                    R.not(isCartEmpty) &&
                    <div className='row'>
                        <div className='pull-right total-user-checkout'>
                            <b>Total:</b>
                            ${totalPrice}
                        </div>
                    </div>
                }
            </div>
        )
    };

  const renderModal = () => {
      const { onRequestClose } = this.props;
      return (
          <Modal
              onRequestClose={onRequestClose}
              effect={Effect.Newspaper}>
              <h1>What you input :</h1>
              <button onClick={ModalManager.close}>Close Modal</button>
          </Modal>
      );
  };

   const openModal =() => {
        ModalManager.open(<Cart onRequestClose={() => true}/>);
    };

  const renderSidebar = () => (
    <div>
        <Link
            className='btn btn-info'
            to='/'>
            <span className='glyphicon glyphicon-info-sign' />
            <span>Continue Shopping</span>
        </Link>
        {
            R.not(isCartEmpty) &&
                <div>
                    <button
                        className='btn btn-danger'
                        onClick={() => cleanCart()}>
                         <span className='glyphicon glyphicon-trash' />
                        Clean Cart
                    </button>
                    <button
                    className='btn btn-success'
                    onClick={()=>cartCheckout(products)}
                    >
                        <span className='glyphicon glyphicon-envelope' />
                        Checkout
                    </button>
                </div>
        }
    </div>
  );
  return (
    <div className='view-container'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-9'>
                    {renderContent()}
                </div>
                <div className='col-md-3 btn-user-checkout'>
                    {renderSidebar()}
                </div>
            </div>
        </div>
    </div>
  );
};

const mapDispatchToProps = {
  removeProductFromCart,
  addOneProductToCart,
  addProductToCart,
  cleanCart,
  cartCheckout
};

const mapStateToProps = state => ({
    products: getProductsCartWithCountSelector(state),
    totalPrice: getTotalCartPriceSelector(state),
});

export default connect (mapStateToProps,mapDispatchToProps)(Cart);