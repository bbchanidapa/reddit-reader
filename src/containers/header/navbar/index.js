
import React, { Component } from 'react';
import { Tabs, Tab, TabHeading, Icon } from 'native-base';

class NavBarContainer extends Component {
  render() {
    return (
      <Tabs>
        <Tab heading={<TabHeading><Icon name="md-flame" /></TabHeading>}></Tab>
        <Tab heading={<TabHeading><Icon name="md-bulb" /></TabHeading>}></Tab>
        <Tab heading={<TabHeading><Icon name="md-analytics"/></TabHeading>}></Tab>
        <Tab heading={<TabHeading><Icon name="md-contacts" /></TabHeading>}></Tab>
        <Tab heading={<TabHeading><Icon name="md-heart" /></TabHeading>}></Tab>
      </Tabs>
    );
  }
}

export default NavBarContainer;