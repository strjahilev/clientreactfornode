import React from 'react';
import {connect} from "react-redux";
// import Book from './Book'

const List = props => {

    console.log(props.books);


        return <div>
            Book List:

                <ul>{props.books.map(book => {

return (<li key={book.id}>{book.title}</li>
               )
                })}
                </ul>
        </div>

};
let mapStateToProps=(state) => {
    return {
        books: state.get
    }
};
export default connect(
    mapStateToProps

) (List);

