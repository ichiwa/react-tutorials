import React from 'react';
import ReactDOM from 'react-dom';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        store: props.store,
        count: props.store.get()
    }
  }
  componentDidMount() {
    this.state.store.addChangeEventListener(this.updateCount.bind(this));
  }
  componentWillUnmount() {
    this.state.store.removeChangeEventListener(this.updateCount.bind(this));
  }
  updateCount() {
    this.setState({ count: this.state.store.get() }); 
  }
  render() {
    return(
      <div> Current count is {this.state.count}</div>
    );
  }
}
