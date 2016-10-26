import { takeEvery, takeLatest, delay } from 'redux-saga';
import { put, call, fork, take } from 'redux-saga/effects';
import { INCREMENT, DECREMENT, INCREMENT_ASYNC, DECREMENT_ASYNC } from './../actions';

function* incAsync(){
  yield call(delay, 1000);
  yield put({type: INCREMENT});
}

function* decAsync() {
  yield call(delay, 1000);
  yield put({type: DECREMENT});
}

function* inc() {
  yield* takeEvery(INCREMENT_ASYNC, incAsync);
}

function* dec() {
  while (true) {
    yield take(DECREMENT_ASYNC);
    yield decAsync();
  }
}

export default function* rootSaga() {
  yield [
    fork(inc),
    fork(dec)
  ]
}
