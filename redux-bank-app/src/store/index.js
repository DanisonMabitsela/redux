import { createStore } from "redux";

// Define the initial state of the store
const initialState = {
  balance: 0,
};

// Define the reducer function that updates the state based on actions
function reducer(state = initialState, action) {
  switch (action.type) {
    // If the action is a deposit, update the balance by adding the amount
    case "DEPOSIT":
      return Object.assign({}, state, {
        balance: state.balance + action.amount,
      });
    // If the action is a withdrawal, update the balance by subtracting the amount
    case "WITHDRAW":
      return Object.assign({}, state, {
        balance: state.balance - action.amount,
      });
    // If the action is to add interest, update the balance by adding 5% of the current balance
    case "ADD_INTEREST":
      return Object.assign({}, state, {
        balance: state.balance + (state.balance * 5) / 100,
      });
    // If the action is to apply charges, update the balance by subtracting 15% of the current balance
    case "CHARGES":
      return Object.assign({}, state, {
        balance: state.balance - (state.balance * 15) / 100,
      });

    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
