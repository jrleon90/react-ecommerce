import React,{Component} from 'react';
import {connect} from 'react-redux';

import {getCategories} from '../../actions';

class Categories extends Component {
    componentDidMount(){
        this.props.getCategories()
    }
    render(){
        return(
          <div>
              Categories
          </div>
        );
    }
}

const mapDispatchToProps = {
    getCategories
};

export default connect(null,mapDispatchToProps)(Categories);