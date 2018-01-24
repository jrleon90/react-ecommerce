import React from 'react';
import { ReactNestedMenu } from 'react-nested-menu';
import menu from '../../api/menu';
import {compose} from "redux";
import {getActiveCategoryIdSelector, getCategoriesSelector} from "../../selectors";
import {withRouter} from "react-router";
import {connect} from "react-redux";

const NestedMenu = () => {

    return (
      <div className='well'>
          <div className='list-group'>
      <ReactNestedMenu

          menuData={menu}/>
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
)(NestedMenu)

