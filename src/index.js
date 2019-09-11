import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Provider } from 'react-redux';
import {createStore, applyMiddleware, } from "redux";
import {getBooks} from './actions/actions';
import thunk from 'redux-thunk';
import add from './reducers'
import * as serviceWorker from './serviceWorker';
import AppRoute from "./Routes";


const store = createStore(add, applyMiddleware(thunk));


store.dispatch(getBooks()).then(() => {

    ReactDOM.render(<Provider store={store}>
        <AppRoute/>
    </Provider>, document.getElementById('root'));
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
