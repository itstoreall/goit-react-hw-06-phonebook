import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactReducer from './contacts/contact-reducer';

const rootRducer = combineReducers({
  contacts: contactReducer,
});

const store = createStore(rootRducer, composeWithDevTools());

export default store;
