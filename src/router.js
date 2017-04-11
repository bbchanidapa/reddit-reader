import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import ContentContainer from './containers/content';

class Routers extends Component {
  render() {
    return (
      <Router hideNavBar={true}>
        <Scene key="root">
          <Scene key="initial" component={ContentContainer} initial />
        </Scene>
      </Router>
    );
  }
}

export default Routers;