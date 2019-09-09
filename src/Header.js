import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h2>Evgeniush</h2>
        <h4>Book Application</h4>
        <div >
            <NavLink to='/' activeStyle={{color:"yellow", fontWeight:"bold"}} exact={true}>List Books</NavLink>
            <NavLink to='/add' activeStyle={{color:"yellow", fontWeight:"bold"}}>Add Book</NavLink>
        </div>
    </header>
);

export default Header;