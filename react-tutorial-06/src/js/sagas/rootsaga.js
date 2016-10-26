import { takeEvery, takeLatest, delay } from 'redux-saga';
import { put, call, fork, take } from 'redux-saga/effects';
import * as actions from './../actions';

function* incAsync(){
  yield call(delay, 1000);
  yield put(actions.increment({test: "test"})); // pass payload
}

function* decAsync() {
  yield call(delay, 1000);
  yield put(actions.decrement({test: "test"})); // pass payload
}

function* inc() {
  yield* takeEvery(actions.INCREMENT_ASYNC, incAsync);
}

function* dec() {
  while (true) {
    yield take(actions.DECREMENT_ASYNC);
    yield decAsync();
  }
}

export default function* rootSaga() {
  yield [
    fork(inc),
    fork(dec)
  ]
}
