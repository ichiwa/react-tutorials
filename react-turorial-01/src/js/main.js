import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/counter';
import Buttons from './components/buttons';

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