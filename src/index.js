import './main.css'
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {browserHistory,Router,Route} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {Provider} from 'react-redux';

import Layout from './containers/layout';
import Products from './containers/products';
//import Categories from './node_modules/containers/categories';
import Cart from './containers/cart';
import Product from './containers/product';

import reducers from './reducers';

const store = createStore(reducers, composeWithDevTools(
   applyMiddleware(thunk)
));

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route component={Layout}>
                <Route path='/' component={Products} />
                <Route path='categories/:id' component={Products} />
                <Route path='sort/:id' component={Products} />
            </Route>
            <Route path='/products/:id' component={Product} />
            <Route path='/cart' component={Cart} />
        </Router>
    </Provider>,
    document.getElementById('root')
);
