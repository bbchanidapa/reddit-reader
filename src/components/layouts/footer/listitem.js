import React, { Component, PropTypes } from 'react';
import { Footer, FooterTab } from 'native-base';
import FooterItem from './item';

class ListItemFooter extends Component {
  renderRow() {
    return this.props.actionMenu.map(item => (
      <FooterTab key={item.id}>
        <FooterItem icon={item.icon} action={item.action} />
      </FooterTab>
    ));
  }
  render() {
    return (
      <Footer>
        {this.renderRow.call(this)}
      </Footer>
    )
  }
}

ListItemFooter.propTypes = {
  actionMenu: PropTypes.node.isRequired
}

export default ListItemFooter;
