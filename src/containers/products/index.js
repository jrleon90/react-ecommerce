import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import {getProducts,addProductToCart,getCategories} from '../../actions';
import {getProductsSelector} from '../../selectors';

class Products extends Component {
    componentDidMount() {
        this.props.getProducts();
        this.props.getCategories();
    }

    renderProduct(product, index){
        const {addProductToCart} = this.props;
        return(
          <div className='col-sm-4 col-lg-4 col-md-4 book-list' key={index}>
              <div className='thumbnail'>
                <Link
                    to={`/products/${product.id}`}>
                <img
                    className='img-responsive'
                    src={product.image}
                    alt={product.name}
                    />
                </Link>
              </div>
              <div className='caption'>
                <h4 className='pull-right'>${product.price}</h4>
                <h4>
                    <Link to={`/products/${product.id}`}>
                        {product.name}
                    </Link>
                </h4>
                <p className='itemButton'>
                    <button
                        className='btn btn-primary'
                        onClick={() => addProductToCart(product.id)}>
                        Buy Now!
                    </button>
                    <Link to={`/products/${product.id}`} className='btn btn-default'>
                        More Info
                    </Link>
                </p>
              </div>
          </div>
        );
    }
    render(){
        const {products} = this.props;
        return (
            <div className='books row'>
                {products.map((product,index)=> this.renderProduct(product, index))}
            </div>
            );
    }
}

const mapStateToProps = (state,ownProps) => ({
    products:getProductsSelector(state, ownProps)
});

const mapDispatchToProps = {
    getProducts,
    addProductToCart,
    getCategories
};

export default connect(mapStateToProps,mapDispatchToProps)(Products);