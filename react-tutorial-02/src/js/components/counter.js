import React from 'react';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      store : props.store
    }
  }
  render() {
    return(
      <div> Current count is {this.state.store.get()}</div>
    );
  }
}
