import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";
import { addContact, deleteContact, filterContacts } from "./redux/actions";
import dataBase from "./components/dataBase/dataBase.json";
import "modern-normalize/modern-normalize.css";

console.log(store.getState());
console.log(store.dispatch(addContact(5)));
console.log(store.dispatch(deleteContact(7)));
console.log(store.dispatch(filterContacts(9)));

ReactDOM.render(
  <React.StrictMode>
    <App initialValue={dataBase} />
  </React.StrictMode>,
  document.getElementById("root"),
);
