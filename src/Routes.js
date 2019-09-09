import React from 'react';
import List from './List';
import App from './App';
import Editbook from "./Editbook";
import Header from './Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


const AppRoute = () => (
    <BrowserRouter >
        <div className='container'>
            <Header />
            <Switch >
                <Route  path="/" component={List} exact={true} />
                <Route path="/add" component={App} />
                <Route path="/book/:id" component={Editbook} />
                {/*<Route path="/book/:id" component={EditBook} />*/}
                {/*<Route component={NotFound} />*/}
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRoute;