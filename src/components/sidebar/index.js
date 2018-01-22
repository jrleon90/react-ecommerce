import React,{Component} from 'react';

import ShoppingCart from '../shopping-cart';
import Search from '../search';

class SideBar extends Component{
    render(){
        return(
            <div>
                <ShoppingCart />
                <Search />
            </div>
        );
    }
}

export default SideBar;