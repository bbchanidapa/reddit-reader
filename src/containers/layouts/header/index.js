import React, { Component, PropTypes } from 'react';
import { Header, Title, Left, Body, Button, Icon } from 'native-base';

class HeaderContainer extends Component {
  render() {
    return (
      <Header hasTabs >
        <Left>
          <Button transparent>
              <Icon name='menu' />
          </Button>
        </Left>
        <Body>
          <Title>{this.props.title}</Title>
        </Body>
      </Header>
    );
  }
}

HeaderContainer.propTypes = {
  title: PropTypes.node.isRequired
}
export default HeaderContainer;
