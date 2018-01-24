import React,{Component} from 'react';

import ShoppingCart from '../shopping-cart';
import Search from '../search';
import NestedMenu from '../nested-menu';

class SideBar extends Component{
    render(){
        return(
            <div>
                <ShoppingCart />
                <Search />
                <NestedMenu />
            </div>
        );
    }
}

export default SideBar;