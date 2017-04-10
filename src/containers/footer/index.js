import React, { Component } from 'react';
import { Text } from 'react-native';
import { Footer, FooterTab, Button, Icon } from 'native-base';

class FooterContainer extends Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button>
            <Icon name="home" />
          </Button>
        </FooterTab>
        <FooterTab>
          <Button>
            <Icon name="search" />
          </Button>
        </FooterTab>
        <FooterTab>
          <Button>
            <Icon name="settings" />
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

export default FooterContainer;