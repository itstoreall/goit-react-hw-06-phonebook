import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactReducer from './contacts/contact-reducer';

// const initialState = {
//   contacts: {
//     items: [],
//     filter: '',
//   },
// };

// const itemsReducer = (state = [], { type, payload }) => {
//   switch (type) {
//     case 'contact/add':
//       return [];

//     case 'contact/del':
//       return [];

//     default:
//       return state;
//   }
// };

// const filterReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case 'contact/filt':
//       return '';

//     default:
//       return state;
//   }
// };

// const contactsReducer = combineReducers({
//   items: itemsReducer,
//   filter: filterReducer,
// });

const rootRducer = combineReducers({
  contacts: contactReducer,
});

const store = createStore(rootRducer, composeWithDevTools());

export default store;
