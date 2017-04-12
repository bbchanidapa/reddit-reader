import React, { Component, PropTypes } from 'react';
import { Header, Title, Left, Right, Body, Button, Icon } from 'native-base';

class HeaderContainer extends Component {
  render() {
    return (
      <Header hasTabs >
        <Left />
        <Body>
          <Title>{this.props.title}</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="ios-pricetag" />
          </Button>
        </Right>
      </Header>
    );
  }
}

HeaderContainer.propTypes = {
  title: PropTypes.node.isRequired
}

export default HeaderContainer;
