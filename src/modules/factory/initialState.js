
import constants from './constants'

export const initialState = {
  orders: constants.ORDERS,
  ordersComplete: [],
  machinesLoaded: [],
  steps: 0,
  isComplete: false,
};

export default { initialState }