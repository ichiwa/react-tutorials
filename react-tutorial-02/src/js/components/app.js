import React from 'react';
import {counterStore} from './../stores/counter_store';
import Counter from './counter';
import Buttons from './buttons';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  handleChange() {
    this.setState({ 
      count: counterStore.get() 
    });
  }
  componentDidMount() {
    counterStore.addChangeEventListener(this.handleChange.bind(this));
  }
  componentWillUnmount() {
    counterStore.removeChangeEventListener(this.handleChange.bind(this));
  }
  render() {
    return (
      <div>
        <Counter store={counterStore}/>
        <Buttons />
      </div>
    );
  }
}
