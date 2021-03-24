import { createStore } from "redux";

const initialState = {
  contacts: {
    items: [],
    filter: "",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return {};
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
