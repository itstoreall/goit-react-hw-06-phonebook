import { combineReducers } from 'redux';
import { ADD, DELETE, FILTER } from './contact-types';

const itemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD:
      return state;

    case DELETE:
      return state;

    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case FILTER:
      return state;

    default:
      return state;
  }
};

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
