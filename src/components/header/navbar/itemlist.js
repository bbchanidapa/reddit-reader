import React, { Component } from 'react';
import { Tabs, Tab, TabHeading, Icon } from 'native-base';
import ContentItem from '../../content/detail';

class ListItemNavbar extends Component {
  renderRow() {
    return this.props.navbar.map((item, index) => {
      return (
        <Tab 
          key={`navbar-item-${index}`} 
          heading={<TabHeading><Icon name={item} /></TabHeading>}>
          <ContentItem />
        </Tab>
      );
    });
  }
  render() {
    return (
      <Tabs>
        { this.renderRow.call(this) }
      </Tabs>
    );
  }
}

export default ListItemNavbar;