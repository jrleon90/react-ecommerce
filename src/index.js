import './main.css'
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {browserHistory,Router,Route} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {Provider} from 'react-redux';

import Layout from './node_modules/containers/layout';
import Products from './node_modules/containers/products';
//import Categories from './node_modules/containers/categories';
import Product from './node_modules/containers/product';

import reducers from 'reducers';

const store = createStore(reducers, composeWithDevTools(
   applyMiddleware(thunk)
));

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route component={Layout}>
                <Route path='/' component={Products} />
            </Route>
            <Route path='/products/:id' component={Product} />
        </Router>
    </Provider>,
    document.getElementById('root')
);
