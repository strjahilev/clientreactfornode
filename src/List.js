import React from 'react';
import {connect} from "react-redux";

class List extends React.Component{

    render(){
        return <div>
            Book List:
            <ul>
                {this.props.books.map((book) => {
                    return <li key={book.id}>
                            {book}
                        </li>}

                )}
            </ul>

        </div>
    }
}
let mapStateToProps=(state) => {
    return {
        books: state
    }
};
export default connect(
    mapStateToProps

) (List);

