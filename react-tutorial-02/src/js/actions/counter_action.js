import counterDispatcher from './../dispatchers/counter_dispatcher';

const CounterAction = {
  inc() {
    counterDispatcher.handleViewAction({ actionType: 'INC' });
  },
  dec() {
    counterDispatcher.handleViewAction({ actionType: 'DEC' });
  }
}

module.exports = CounterAction;