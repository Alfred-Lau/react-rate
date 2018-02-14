import { createStore } from 'redux';
import reducers from '../reducers';

export default (initial = {}) => {
    const store = createStore(reducers, initial, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};
