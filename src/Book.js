import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeBook } from './actions/actions';

const Book = ({ id, title, dispatch }) => (
    <div>
        <Link to={`/book/${id}`} activeStyle={{color:"red"}}>
            <p key={id}>{title}</p>
        </Link>
        <button onClick={() => {
            dispatch(removeBook({ id }));
        }}>Delete</button>
    </div>
);
export default connect()(Book);