import { reducer } from './reducer';
import { createPersistentStore } from './state-manager';
import { State } from './types';

const initialState: State = new State();

const globalState = createPersistentStore(reducer, {
  name: 'app-state',
  log: true,
  initialize: () => {
    if (typeof window === 'undefined') return initialState;
    const persisted = sessionStorage.getItem('app-state');
    return persisted ? JSON.parse(persisted) : initialState;
  },
  handleChange: (prev, next) => {
    sessionStorage.setItem('app-state', JSON.stringify(next));
  }
});

export default globalState;
