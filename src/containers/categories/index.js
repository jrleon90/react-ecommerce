import React from 'react';
import {connect} from 'react-redux';
import {Link,withRouter} from 'react-router';
import {compose} from 'redux';

import {
    getCategoriesSelector,
    getActiveCategoryIdSelector
} from "../../selectors";

const Categories = ({categories,}) => {
    console.log('categories',categories);
    const renderCategoryList = (category,index) => {
      return (
        <Link to={`/categories/${category.id}`}
        className='list-group-item'
        key={index}>
            {category.name}
        </Link>
      );
    };

    const renderAllCategory = () => {
      return (
          <Link
          to='/'
          className='list-group-item'>
            Todas
          </Link>
      );
    };

    return(
      <div className='well'>
        <h4>Categories</h4>
        <div className='list-group'>
            {renderAllCategory()}
            {categories.map((category,index)=>renderCategoryList(category,index))}
        </div>
      </div>
    );


};

const mapStateToProps = (state, ownProps) => ({
    categories: getCategoriesSelector(state),
    activeCategoryId: getActiveCategoryIdSelector(ownProps)
});

export default compose(
    withRouter,
    connect(mapStateToProps)
)(Categories)
