import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contacts/contact-reducer';

/* ------------------------ Logger for Redux
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
const middleware = [...getDefaultMiddleware(), logger];
---------------------------------------- */

const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
  // middleware, // Logger for Redux
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
