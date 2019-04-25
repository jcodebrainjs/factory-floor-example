import t from './actionTypes';

export const init = (orders) => ({
  type: t.INIT,
  payload: { orders }
});

export const step = () => ({
  type: t.STEP,
});

export default { init, step }