import React from 'react';
import { connect } from 'react-redux'
import './App.css';
import {add, editBook, getBooks} from './actions/actions';



class App extends React.Component {
    constructor(props){
        super(props.book);

        this.onTitleChange = this.onTitleChange.bind(this);
        this.state = {
            title: props.book ? props.book.title : '',
            };
console.log('!!'+this.state.book);
    }
    additem(e){
        e.preventDefault();
        this.props.onEditBook(
            {title: this.props.book.title});


        this.props.onAddItem(
            {
                title: this.Input.value,
            }
        );
       this.props.onGetItem();


        this.Input.value =``;
    };
    onTitleChange(e) {
        const title = e.target.value;
        this.setState(() => ({ title: title }));
    }

    render() {


        return <div className="App">
            <h1> list</h1>
            <input type="text"  value={this.state.title} onChange={this.onTitleChange} ref={(input) => { this.Input = input; }} />
            <button onClick={this.additem.bind(this)}>BUTTON</button>

            {/*<List />*/}
        </div>

    }
}
 let mapStateToProps=(state, props) => {
    return {
       books: state

    } };
let dispatchMapToProps=(dispatch)=>{
    return {
        onAddItem: (item) => {dispatch(add(item))},
        onGetItem: () => {dispatch(getBooks())},
        onEditBook: (item) => {dispatch(editBook(item.id, item));

        }
    }

};
export default connect(
     mapStateToProps,
    dispatchMapToProps
) (App);