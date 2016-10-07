import React from "react"
import { connect } from 'react-redux';
import Counter from './counter';
import Buttons from './buttons';
import { INCREMENT, DECREMENT } from './../actions/counterActions';

// @connect( state => ({
//   count: state.count,
// }))
// export default class App extends React.Component {
class App extends React.Component {
  render() {
    const { count, dispatch} = this.props;
    const action = type => dispatch({type});
    return (
      <div>
        <Counter count={count}/>
        <Buttons 
          onIncrement={() => action(INCREMENT)}
          onDecrement={() => action(DECREMENT)}
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
export default connect(mapStateToProps)(App);