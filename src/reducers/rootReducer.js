import { combineReducers } from 'redux';

import dns from './dnsReducer';
import query from './queryReducer';

const rootReducer = combineReducers({
  dns,
  query,
});

export default rootReducer;
