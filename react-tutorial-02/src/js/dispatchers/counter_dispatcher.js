import {Dispatcher} from 'flux';

class CounterDispatcher extends Dispatcher {
  handleViewAction(action) {
    this.dispatch({ action: action });
  }
}

export default new CounterDispatcher();