import counterDispatcher from './../dispatchers/counter_dispatcher';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'CHANGE';

class CounterStore extends EventEmitter {
  constructor () {
    super();
    this.count = 0;
  }
  get() {
    return this.count;
  }
  inc() {
    this.count += 1;
    this.emit(CHANGE_EVENT);
  }
  dec() {
    this.count -= 1;
    this.emit(CHANGE_EVENT);
  }
  addChangeEventListener( cb ) {
    this.on(CHANGE_EVENT, cb);
  }
  removeChangeEventListener( cb ) {
    this.removeListener(CHANGE_EVENT, cb);
  }
}
const counterStore = new CounterStore();

counterDispatcher.register(payload => {
  switch(payload.action.actionType) {
    case 'INC':
      counterStore.inc();
      break;
    case 'DEC':
      counterStore.dec();
      break;
  }
});

exports.counterStore = counterStore;