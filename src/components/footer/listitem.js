import React, { Component } from 'react';
import { Footer ,FooterTab, Button, Icon } from 'native-base';
import FooterItem from './item';

class ListItemFooter extends Component {
  renderRow() {
    return this.props.footer.map((item, index) => {
      return(
        <FooterTab key={`footer-tab-${index}`}>
          <FooterItem icon={item} />
        </FooterTab>
      );
    });
  }
  render() {
    return (
      <Footer>
        {this.renderRow.call(this)}
      </Footer>
    )
  }
}

export default ListItemFooter;