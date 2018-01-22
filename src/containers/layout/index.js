import React from 'react';
import {Link} from 'react-router';

import CategorieMenu from '../../components/cateogorie-menu/index';
import SideBar from '../../components/sidebar/index';

const Layout = ({children}) => (
    <div className='view-container'>
        <div className='container' >
            <nav className='navbar navbar-default'>
                <div className='container-fluid'>
                    <div className='navbar-header'>
                        <Link
                        to='#'
                        className='navbar-brand'>
                            El Baratón
                        </Link>
                        <ul className='nav navbar-nav'>
                            <li className="active"><a href="#">Home</a></li>
                            <li><a href="#">Page 1</a></li>
                            <li><a href="#">Page 2</a></li>
                            <li><a href="#">Page 3</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className='row'>
                <div className='col-md-3'>
                    <CategorieMenu />
                    <SideBar />
            </div>
            <div className='col-md-9'>
                {children}
            </div>
            </div>
        </div>
    </div>
);

export default Layout;