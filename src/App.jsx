import React from 'react';
import { Provider } from 'react-redux';
import HttpsRedirect from 'react-https-redirect';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import throttle from 'redux-throttle';
import thunk from 'redux-thunk';
import { save, load } from 'redux-localstorage-simple';

import Navigation from './components/Navigation/index';
import Hero from './components/Hero/index';
import Main from './components/Main/index';

import rootReducer from './reducers/rootReducer';

/*
const defaultWait = 100;
const defaultThrottleOption = {
  leading: true,
  trailing: true,
};
*/

const middleware = [thunk];

export const store = createStore(
  rootReducer,
  load(),
  composeWithDevTools(applyMiddleware(...middleware, save())),
);

const App = () => (
  <Provider store={store}>
    <HttpsRedirect>
      <Navigation />
      <Hero />
      <Main />
    </HttpsRedirect>
  </Provider>
);

export default App;
