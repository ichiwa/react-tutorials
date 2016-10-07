import React from 'react';

export default class Buttons extends React.Component {
  render() {
    return(
    <div>
        <button onClick={this.props.onIncrement}>Increment</button>
        <button onClick={this.props.onDecrement}>Decrement</button>
      </div>
    );
  }
}
