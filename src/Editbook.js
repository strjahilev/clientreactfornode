// import {editBook} from "./actions/actions";
// import {connect} from "react-redux";
// import React from 'react';
// import App from "./App";
//
// const Editbook = (props) => (
//
//             <div >
//                 <App
// book={props.book}
// onSubmitBook={(book) => {
//     props.dispatch(editBook(props.book.id, book));
//     props.history.push('/');
// }}
// />
// </div>
// );
// let mapStateToProps=(state, props) => {
//     return {
//         book: state.find((book) =>
//             book.id === props.match.params.id)
//     }
// };
//
// export default connect(
//     mapStateToProps
//
// ) (Editbook);