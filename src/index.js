import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './stores';
import Routers from './router';

const store = configureStore();
const App = () => (
  <Provider store={store}>
    <Routers />
  </Provider>
);
export default App;
