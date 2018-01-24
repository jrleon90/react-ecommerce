import React from 'react';

import SideBar from '../../components/sidebar';
import FilterMenu from '../../components/filter-menu';

const Layout = ({children}) => (
    <div className='view-container'>
        <div className='container' >
            <FilterMenu />
            <div className='row'>
                <div className='col-md-3'>
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