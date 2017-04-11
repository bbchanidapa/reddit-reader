import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import LayoutContainer from './containers';
import ContentContainer from './containers/pages/content';
import SearchContainer from './containers/pages/search';
import SettingContainer from './containers/pages/setting';


const Routers = () => (
  <Router hideNavBar>
    <Scene key="root" component={LayoutContainer} initial passProps title="Reddit Reader" >
      <Scene key="contentPage" component={ContentContainer} initial title="Content" />
      <Scene key="searchPage" component={SearchContainer} passProps title="Search" />
      <Scene key="settingPage" component={SettingContainer} passProps title="Setting" />
    </Scene>
  </Router>
);

export default Routers;
