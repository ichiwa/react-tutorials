import React from "react"
import { connect } from 'react-redux';
import Counter from './counter';
import Buttons from './buttons';
import { INCREMENT, DECREMENT, INCREMENT_ASYNC, DECREMENT_ASYNC} from './../actions/counter_action';

class App extends React.Component {
  render() {
    const { count, dispatch} = this.props;
    const action = type => dispatch({type});
    return (
      <div>
        <Counter count={count}/>
        <Buttons 
          onIncrement={() => action(INCREMENT_ASYNC)} 
          onDecrement={() => action(DECREMENT_ASYNC)}
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