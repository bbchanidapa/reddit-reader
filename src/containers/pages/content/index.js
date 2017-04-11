import React, { Component, PropTypes } from 'react';
import { Content, Body, Text, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';

class ContentContainer extends Component {
  render() {
    return (
      <Content>
        <Body>
          <Text>ContentContainer</Text>
          <Button onPress={() => { Actions.searchPage({ type: 'replace' }) }} >
            <Text> Actions to searchPage</Text>
          </Button>
        </Body>
      </Content>
    );
  }
}

ContentContainer.propTypes = {

};

export default ContentContainer;
