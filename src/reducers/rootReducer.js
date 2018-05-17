import { combineReducers } from 'redux';

import dns from './dnsReducer';

const rootReducer = combineReducers({
  dns,
});

export default rootReducer;
