import { INCREMENT, DECREMENT } from './../actions/counter_action';

const initialState = {
  count: 0
}

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 }
    case DECREMENT:
      return { count: state.count - 1 }
    default:
      return state;
  }
}