import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Book = ({ id, title }) => (
    <div>
        <Link to={`/book/${id}`} activeStyle={{color:"red"}}>
            <p key={id}>{title}</p>
        </Link>
    </div>
);
export default connect()(Book);