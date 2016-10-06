import React from 'react';
import CounterAction from './../actions/counter_action';

export default class Buttons extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
    <div>
        <button onClick={CounterAction.inc}>Increment</button>
        <button onClick={CounterAction.dec}>Decrement</button>
      </div>
    );
  }
}
