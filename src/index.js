import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import Routers from './router';
import ContentContainer from './containers/content';
const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routers />
      </Provider>
    );
  }
}

export default App;