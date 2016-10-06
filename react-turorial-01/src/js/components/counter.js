import React from 'react';
import ReactDOM from 'react-dom';

export default class Counter extends React.Component {
  constructor(p) {
    super(p);
  }
  render() {
    return(
      <div> Current count is {this.props.count}</div>
    );
  }
}
