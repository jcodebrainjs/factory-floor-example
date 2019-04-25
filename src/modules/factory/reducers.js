import t from "./actionTypes";
import { hashOrders, initOrders, updateMachines } from "./utils";
import { initialState } from "./initialState";

const reducerMap = {
  [t.INIT]: (state, { orders }) => {
    const { machinesLoaded, ordersComplete, ordersLeft } = initOrders(orders);
    return {
      ...state,
      machinesLoaded,
      ordersComplete,
      isComplete: ordersLeft === 0,
      orders: hashOrders(orders)
    };
  },
  [t.STEP]: state => {
    const { machinesLoaded, ordersLeft, ordersComplete } = updateMachines(
      state.ordersComplete
    );
    if (ordersLeft > 0) {
      const steps = state.steps + 1;
      return {
        ...state,
        machinesLoaded,
        ordersComplete,
        steps
      };
    }
    return {
      ...state,
      machinesLoaded,
      ordersComplete,
      isComplete: true
    };
  }
};

export default (state = initialState, action) => {
  const reducer = reducerMap[action.type];

  return reducer ? reducer(state, action.payload) : state;
};
