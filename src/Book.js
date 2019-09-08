import React from 'react';
import { connect } from 'react-redux';

const Book = ({ id, title }) => (
    <div>
<h1 key={id}>{title}</h1>
    </div>
);
export default connect()(Book);