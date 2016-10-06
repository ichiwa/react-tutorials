import React from 'react';
import ReactDOM from 'react-dom';

export default class Buttons extends React.Component {
  constructor(p) {
    super(p);
  }
  render() {
    return(
    <div>
        <button onClick={this.props.inc}>Increment</button>
        <button onClick={this.props.dec}>Decrement</button>
      </div>
    );
  }
}