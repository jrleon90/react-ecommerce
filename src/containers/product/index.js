import React,{Component} from 'react';
import {connect} from 'react-redux';
import R from 'ramda';
import {Link} from 'react-router';

import Cart from '../../components/shopping-cart/index';
import {getProductByIdSelector} from '../../selectors';
import {getProductById,addProductToCart} from '../../actions';

class Product extends Component{
    componentDidMount(){
        this.props.getProductById(this.props.params.id)
    }

    renderFields(){
        const {product} = this.props;
        const columnFields = R.compose(
            R.toPairs,
            R.pick([
                'quantity',
                'sublevel_id'
            ])
        )(product);
        return columnFields.map(([key,value]) => (
           <div className='column' key={key}>
               <div className='ab-details-title'>
                    <p>{key}</p>
               </div>
               <div className='ab-details-info'>
                   {value}
               </div>
           </div>
        ));
    };

    renderContent(){
        const {product} = this.props;
        return(
            <div className='thumbnail'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img
                            className='img-responsive product-image'
                            src={product.image}
                            alt={product.name}
                        />
                    </div>
                    <div className='col-md-6'>
                        {this.renderFields()}
                    </div>
                </div>
                <div className='caption-full'>
                    <h4 className='pull-right'>${product.price}</h4>
                    <h4>{product.name}</h4>
                </div>
            </div>
        );
    };

    renderSidebar(){
        const {product,addProductToCart} = this.props;
        return(
            <div>
                <p className='lead'>Quick Shop</p>
                <Cart />
                <div className='form-group'>
                    <h1>{product.name}</h1>
                    <h2>${product.price}</h2>
                </div>
                <Link
                    to='/'
                    className='btn btn-info btn-block'>
                    Back to Store
                </Link>
                <button
                type='button'
                className='btn btn-success btn-block'
                onClick={() => addProductToCart(product.id)}
                >
                    Add to Cart
                </button>
            </div>
        );
    };
    render(){
        const {product} = this.props;
        return(
            <div className='view-container'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-9'>
                            {product && this.renderContent()}
                        </div>
                        <div className='col-md-3'>
                            {product && this.renderSidebar()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    product: getProductByIdSelector(state, state.ProductPageInfo.id)
  };
};

const mapDispatchToProps = {
    getProductById,
    addProductToCart
};

export default connect(mapStateToProps,mapDispatchToProps)(Product);