import React,{Component} from 'react';
import {Link} from 'react-router';

import Categories from '../../containers/categories';

class CategorieMenu extends Component {
    render(){
        return(
            <div>Hello </div>
        );
        /*return(
            <nav className='navbar navbar-inverse'>
                <div className='container-fluid'>
                    <div className='navbar-header'>
                        <Link className='navbar-brand' to='/'>El Baratón</Link>
                    </div>
                    <ul className='nav navbar-nav'>
                        <li className='active'><a href='#'>Home</a></li>
                        <li className='dropdown'>
                            <Link className='dropdown-toggle' data-toggle='dropdown' to='#'>Categorias
                                <span className='caret' />
                            </Link>
                                <Categories />
                        </li>
                    </ul>
                </div>
            </nav>

        );
        */
    }
}

export default CategorieMenu;