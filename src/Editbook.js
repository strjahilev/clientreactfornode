import {connect} from "react-redux";
import React from 'react';
import App from "./App";



const Editbook = (props) => (

            <div >
                <App
                    book={props.book}/>
            </div>
);
const mapStateToProps = (state, props) => {
    return {
        book: state.getbook.find((book) =>
            book.id === props.match.params.id)
    };
};

export default connect(
    mapStateToProps

) (Editbook);