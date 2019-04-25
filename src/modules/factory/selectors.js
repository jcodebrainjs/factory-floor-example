import { createSelector } from "reselect";
import initialState from "./initialState";
import { NAME } from "./constants";

const getFactoryStore = createSelector(
  state => state[NAME],
  store => store || {}
);

export const getFactory = state => getFactoryStore(state) || initialState;

export const getFactoryOrdersComplete = state =>
  getFactory(state).ordersComplete;

export const getFactoryMachinesLoaded = state =>
  getFactory(state).machinesLoaded;

export const getFactorySteps = state => getFactory(state).steps;

export const getFactoryIsComplete = state => getFactory(state).isComplete;

export default {
  getFactory,
  getFactoryOrdersComplete,
  getFactoryMachinesLoaded,
  getFactorySteps,
  getFactoryIsComplete
};
