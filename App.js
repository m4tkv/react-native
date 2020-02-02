import React from 'react';
import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createRootReducer from './reducers/index';
import {MainNavigator} from './Navigator/MainNavigator'


const store = createStore(createRootReducer, applyMiddleware(thunk));

export default function App() {
  return (
      <Provider store={store}>
          <MainNavigator/>
      </Provider>
  );
}
