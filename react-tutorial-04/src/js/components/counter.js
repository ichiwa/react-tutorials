import React from 'react';

export default class Counter extends React.Component {
  render() {
    return(
      <div> Current count is {this.props.count}</div>
    );
  }
}
