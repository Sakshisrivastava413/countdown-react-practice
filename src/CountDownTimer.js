import React, { Component } from 'react';

// First React Component made by Sakshi, so happy am I! :)
class CountDownTimer extends Component {

  constructor(props) { //constructor of this class 
    super(props); // how to call this constructor
    this.state = { // handling state, made a object of this state and assigning the value from the parent interpolation
      currentCount: this.props.clicks
    }
    // this.functionName = this.functionName.bind(this); copy as it is in every constructor
    // this.decreaseCount = this.decreaseCount.bind(this);
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => {
          {
            this.setState({ // setState- predefined function 
              currentCount: this.state.currentCount - 1 // use the same object name as used in state object to override the values
            });
          }
        }}>

          {this.state.currentCount}
        </button>
      </div> // onClick = { function }
    );
  }
}

export default CountDownTimer;
