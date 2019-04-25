import { combineReducers } from 'redux';
import factory from 'modules/factory';

export default combineReducers({
  [factory.constants.NAME]: factory.reducers,
});