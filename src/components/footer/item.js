import React, { Component } from 'react';
import { Button, Icon } from 'native-base';

class FooterItem extends Component {
  render() {
    return (
      <Button>
        <Icon name={this.props.icon} />
      </Button>
    );
  }
}

export default FooterItem;