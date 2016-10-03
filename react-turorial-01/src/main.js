import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
  constructor(p) {
    super(p);
  }
  render() {
    return(
      <div> Current count is {this.props.count}</div>
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
        <button onClick={this.props.inc}>Increment</button>
        <button onClick={this.props.dec}>Decrement</button>
      </div>
    );
  }
}

class App extends React.Component {
  constructor( p ) {
    super( p );
    this.state = {
      count: 0 
    }
  }
  inc() {
    ++this.state.count;
    this.setState({ count: this.state.count }); 
  }
  dec() {
    --this.state.count;
    this.setState({ count: this.state.count }); 
  }
  render() {
    return (
      <div>
        <Counter count={this.state.count}/>
        <Buttons inc={this.inc.bind(this)} dec={this.dec.bind(this)}/>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app-container')
);