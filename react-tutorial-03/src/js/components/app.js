import React from "react"
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Counter from './counter';
import Buttons from './buttons';
import * as CounterActions from './../actions/counter_action';

// @connect( state => ({
//   count: state.count,
// }))
// export default class App extends React.Component {
class App extends React.Component {
  render() {
    const { count, dispatch} = this.props;
    const actions = bindActionCreators(CounterActions, dispatch);
    return (
      <div>
        <Counter count={count}/>
        <Buttons actions={actions}/>
      </div>
    )
  }
}
export default connect((state) => {return {count: state.count}})(App);