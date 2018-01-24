import React from 'react';
import {connect} from 'react-redux';
import R from 'ramda';
import {Link} from 'react-router';

import {
    removeProductFromCart,
    addProductToCart,
    cleanCart,
    removeOneProduct,
    cartCheckout
} from '../../actions';

import {
    getProductsCartWithCountSelector,
    getTotalCartPriceSelector
} from '../../selectors';

const Cart = ({products, totalPrice, addProductToCart,removeOneProduct,removeProductFromCart,cleanCart,cartCheckout}) => {
    const isCartEmpty = R.isEmpty(products);
    const renderContent = () => {
        return (
            <div>
                {isCartEmpty && <div>Tu carrito esta vacio</div>}

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
                                <td><button className='glyphicon glyphicon-minus remove-product-in-cart'
                                    onClick={() => removeOneProduct(product.id)}
                                    />
                                    {product.count}
                                    <button className='glyphicon glyphicon-plus add-product-in-cart'
                                        onClick={() => addProductToCart(product.id)}
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

  const renderSidebar = () => (
    <div>
        <Link
            className='btn btn-info'
            to='/'>
            <span className='glyphicon glyphicon-info-sign' />
            <span>Continua Comprando</span>
        </Link>
        {
            R.not(isCartEmpty) &&
                <div>
                    <button
                        className='btn btn-danger'
                        onClick={() => cleanCart()}>
                         <span className='glyphicon glyphicon-trash' />
                        Limpiar el Carro
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
  addProductToCart,
  removeOneProduct,
  cleanCart,
  cartCheckout
};

const mapStateToProps = state => ({
    products: getProductsCartWithCountSelector(state),
    totalPrice: getTotalCartPriceSelector(state),
});

export default connect (mapStateToProps,mapDispatchToProps)(Cart);