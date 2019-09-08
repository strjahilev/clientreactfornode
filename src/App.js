import React from 'react';
import { connect } from 'react-redux'
import './App.css';
import {add} from './actions/actions';

import List from './List'

class App extends React.Component {
    additem(){
        this.props.onAddItem(
            {
                title: this.Input.value,
            }
        );
        this.Input.value = '';
    }
    render() {


        return <div className="App">
            <h1> list</h1>
            <input type="text" ref={(input) => { this.Input = input; }} />
            <button onClick={this.additem.bind(this)}>BUTTON</button>

            <List />
        </div>

    }
}
 let mapStateToProps=(state) => {
    return {
       books: state
    } };
let dispatchMapToProps=(dispatch)=>{
    return {
        onAddItem: (item) => {dispatch(add(item))}

    }
};
export default connect(
     mapStateToProps,
    dispatchMapToProps
) (App);