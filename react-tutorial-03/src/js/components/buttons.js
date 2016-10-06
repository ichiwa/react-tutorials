import React from 'react';

export default class Buttons extends React.Component {
  render() {
    return(
    <div>
        <button onClick={this.props.actions.inc}>Increment</button>
        <button onClick={this.props.actions.dec}>Decrement</button>
      </div>
    );
  }
}
