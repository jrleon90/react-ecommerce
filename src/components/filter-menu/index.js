import React,{Component} from 'react';
import {Link} from 'react-router';

class FilterMenu extends Component {
    render(){
        return(
        <div className='well'>
            <div className='list-group'>
                <Link className='btn btn-default' to='/sort/price'>
                    Ordenar por precio
                </Link>
                <Link className='btn btn-default'>
                    Ordenar por disponibilidad
                </Link>
                <Link className='btn btn-default'>
                    Ordenar por cantidad
                </Link>
            </div>
        </div>
        );
    }
}

export default FilterMenu;