import { createAction } from 'redux-actions';

export const INCREMENT = 'INCREMENT';
export const increment = createAction('INCREMENT');

export const DECREMENT = 'DECREMENT';
export const decrement = createAction('DECREMENT');

export const INCREMENT_ASYNC = 'INCREMENT_ASYNC';
export const incrementAsync = createAction('INCREMENT_ASYNC');

export const DECREMENT_ASYNC = 'DECREMENT_ASYNC';
export const decrementAsync = createAction('DECREMENT_ASYNC');