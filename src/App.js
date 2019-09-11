import React from 'react';
import { connect } from 'react-redux'
import './App.css';
import {add, getBooks} from './actions/actions';



class App extends React.Component {
    constructor(props){
        super(props);
console.log('??'+ props.book.id);
        this.onTitleChange = this.onTitleChange.bind(this);
        this.state = {
            id: props.book? props.book.id:'',
            title: props.book ? props.book.title : '',
            };
console.log('!!'+this.state.id);
    }
    edititem(e){
        e.preventDefault();
        this.props.onEditBook(
            {
                id: this.state.id,
                title: this.state.title
            }

        );
        this.props.onGetItem();
        this.Input.value='';
    }
    additem(e){
        e.preventDefault();
        this.props.onAddItem(
            {
                title: this.Input.value,
            },

        );
       this.props.onGetItem();


        this.Input.value ='';
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
            <button onClick={this.edititem.bind(this)}>EDIT</button>


            {/*<List />*/}
        </div>

    }
}
 let mapStateToProps=(state) => {
    return {
       books: state

    } };
let dispatchMapToProps=(dispatch, props)=>{
    return {
        onAddItem: (item) => {dispatch(add(item))},
        onGetItem: () => {dispatch(getBooks())},

        // onEditBook: (item) => {dispatch(editBook(item.id, item))}

        }
    }

;
export default connect(
     mapStateToProps,
    dispatchMapToProps
) (App);