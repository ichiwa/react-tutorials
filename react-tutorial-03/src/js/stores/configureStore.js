import { createStore } from 'redux';
import { counterReducer } from './../reducers/counter_reducer';

export default function configureStore(initialState) {
  const store = createStore(
    counterReducer,
    initialState
  );
  return store;
}