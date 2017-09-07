import { createStore } from 'redux';
import todoApp from '../Reducers/reducers';

let store = createStore(todoApp);


export default store;
