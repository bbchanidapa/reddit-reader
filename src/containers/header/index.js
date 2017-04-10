import React, { Component } from 'react';
import { Header, Title, Left, Body, Button, Icon } from 'native-base';

class HeaderContainer extends Component {
  render() {
    return (
      <Header hasTabs >
        <Left>
        </Left>
        <Body>
          <Title>{this.props.title}</Title>
        </Body>
      </Header>
    );
  }
}

export default HeaderContainer;