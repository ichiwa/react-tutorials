import React from 'react';
import {counterStore} from './../stores/counter_store';
import Counter from './counter';
import Buttons from './buttons';

export default class App extends React.Component {
  constructor( p ) {
    super(p);
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
