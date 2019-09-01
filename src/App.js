import React from 'react';
import { connect } from 'react-redux'
import './App.css';
import {add} from './actions/actions'

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

    <ul>
      {this.props.testStore.map((element, index) =>
          <li key={index}>{element}</li>
      )}
    </ul>

  </div>

  }
}

export default connect(
    state => ({
      testStore: state
    }),
    dispatch => ({
      onAddItem: (item) => {dispatch(add(item))},

    })
) (App);
