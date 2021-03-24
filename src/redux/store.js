import { createStore } from 'redux';

// const initialState = {
//   contacts: {
//     items: [],
//     filter: "",
//   },
// };

const initialState = { counterValue: 0 };

const reducer = (state = initialState, { type, payload }) => {
  console.log(state);
  switch (type) {
    case 'contact/add':
      return { counterValue: state.counterValue + payload };

    case 'contact/del':
      return { counterValue: state.counterValue - payload };

    case 'contact/filt':
      return { counterValue: state.counterValue + payload };

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
