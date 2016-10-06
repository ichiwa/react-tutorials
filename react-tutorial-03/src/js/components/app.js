import React from "react"
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from './counter';
import Buttons from './buttons';
import * as CounterActions from './../actions/counter_action';

class App extends React.Component {
  render() {
    const { count, dispatch } = this.props
    const actions = bindActionCreators(CounterActions, dispatch)    
    return (
      <div>
        <Counter count={count}/>
        <Buttons actions={actions}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    counterActions: bindActionCreators(CounterActions, dispatch)
  }
}

export default connect(mapStateToProps)(App);