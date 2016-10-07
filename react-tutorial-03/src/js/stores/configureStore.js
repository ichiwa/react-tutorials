import { createStore } from 'redux';
import counterReducer from './../reducers/counterReducer';

export default function configureStore(initialState) {
  const store = createStore(
    counterReducer,
    initialState
  );
  return store;
}