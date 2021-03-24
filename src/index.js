import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';
import dataBase from './components/dataBase/dataBase.json';
import 'modern-normalize/modern-normalize.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App initialValue={dataBase} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
