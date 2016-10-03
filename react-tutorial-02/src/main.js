import React from 'react';
import ReactDOM from 'react-dom';
import {Dispatcher} from 'flux';
import Assign from 'object-assign';
import {EventEmitter} from 'events';

// CounterStore → callback is componentDidMount
const CHANGE = 'CHANGE';
class CounterStore extends EventEmitter {
  constructor () {
    super();
    this.count = 0;
  }
  get() {
    return this.count;
  }
  inc() {
    this.count += 1;
    this.emit(CHANGE);
  }
  dec() {
    this.count -= 1;
    this.emit(CHANGE);
  }
  addChangeEventListener( cb ) {
    this.on(CHANGE, cb);
  }
  removeChangeEventListener( cb ) {
    this.removeListener(CHANGE, cb);
  }
}
const counterStore = new CounterStore();

// CounterDispacher → CounterStore
class CounterDispacher extends Dispatcher {
  handleViewAction(action) {
    this.dispatch({ action: action });
  }
}
const counterDispacher = new CounterDispacher();
counterDispacher.register(payload => {
  switch(payload.action.actionType) {
    case 'INC':
      counterStore.inc();
      break;
    case 'DEC':
      counterStore.dec();
      break;
  }
});

// CounterAction → CounterDispacher
class CounterAction {
  inc() {
    counterDispacher.handleViewAction({ actionType: 'INC' });
  }
  dec() {
    counterDispacher.handleViewAction({ actionType: 'DEC' });
  }
}
const counterAction = new CounterAction();

// components
class Counter extends React.Component {
  constructor(p) {
    super(p);
    this.state = { count: counterStore.get() }
  }
  componentDidMount() {
    counterStore.addChangeEventListener(this.updateCount.bind(this));
  }
  componentWillUnmount() {
    counterStore.removeChangeEventListener(this.updateCount.bind(this));
  }
  updateCount() {
    this.setState({ count: counterStore.get() }); 
  }
  render() {
    return(
      <div> Current count is {this.state.count}</div>
    );
  }
}

class Buttons extends React.Component {
  constructor(p) {
    super(p);
  }
  render() {
    return(
    <div>
        <button onClick={counterAction.inc}>Increment</button>
        <button onClick={counterAction.dec}>Decrement</button>
      </div>
    );
  }
}

class App extends React.Component {
  constructor( p ) {
    super( p );
  }
  render() {
    return (
      <div>
        <Counter/>
        <Buttons/>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app-container')
);