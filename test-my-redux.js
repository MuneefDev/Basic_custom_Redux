// Contestants
const WITHDRAW_MONEY = "WITHDRAW_MONEY";
const DEPOSIT_MONEY = "DEPOSIT_MONEY";

// Action creators
const withdraw = (amount) => ({
  type: WITHDRAW_MONEY,
  payload: amount,
});

const deposit = (amount) => ({
  type: DEPOSIT_MONEY,
  payload: amount,
});

// Reducer
const bankReducer = (state = 1000, action) => {
  switch (action.type) {
    case WITHDRAW_MONEY:
      return state - action.payload;
      break;
    case DEPOSIT_MONEY:
      return state + action.payload;
      break;
    default:
      return state;
      break;
  }
};

const myStore = $redux.createStore(bankReducer);
myStore.subscribe(() => {
  console.log(`Your state is : ${myStore.getState()}`);
});
