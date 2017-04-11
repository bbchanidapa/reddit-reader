import React, { Component } from 'react';
import { Button, Icon } from 'native-base';
import { Actions } from "react-native-router-flux";

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