import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }
  render() {
    return (
      <>
        <h1>Value: {this.state.counter}</h1>
        <button
          onClick={() => this.setState((state) => (
            { counter: state.counter - 1 }
          ))}
        >
          DOWN
        </button>
        <button
          onClick={() => this.setState((state) => (
            { counter: state.counter + 1 }
          ))}
        >
          UP
        </button>
      </>
    );
  } 
};

export default Counter;
