import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { save, load } from 'redux-localstorage-simple';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Main from './components/Main';

import rootReducer from './reducers/rootReducer';

const middleware = [thunk];

export const store = createStore(
  rootReducer,
  load(),
  composeWithDevTools(applyMiddleware(...middleware, save())),
);

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navigation />
        <Hero />
        <Main />
      </Fragment>
    </Router>
  </Provider>
);

export default App;
