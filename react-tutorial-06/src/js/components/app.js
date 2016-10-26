import React from "react"
import { connect } from 'react-redux';
import Counter from './counter';
import Buttons from './buttons';
import * as actions from './../actions';

class App extends React.Component {
  render() {
    const { count } = this.props;
    return (
      <div>
        <Counter count={count}/>
        <Buttons 
          onIncrement={() => this.props.incrementAsync() } 
          onDecrement={() => this.props.decrementAsync() }
        />
      </div>
    )
  }
}
const mapStateToProps = (store) => {
  return {
    count: store.counterReducer.count
  };
}
export default connect(mapStateToProps, actions)(App);