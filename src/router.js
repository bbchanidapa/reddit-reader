import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import LayoutContainer from './containers';
import ContentContainer from './containers/pages/content';
import SearchContainer from './containers/pages/search';
import SettingContainer from './containers/pages/setting';


const Routers = () => (
  <Router hideNavBar>
    <Scene key="root" component={LayoutContainer} >
      <Scene key="initial" component={ContentContainer} initial passProps />
      <Scene key="searchPage" component={SearchContainer} passProps />
      <Scene key="settingPage" component={SettingContainer} passProps />
    </Scene>
  </Router>
);

export default Routers;
