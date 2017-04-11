import React, { Component } from 'react';
import { CardItem, Text, Body } from 'native-base';

class ContentItem extends Component {
  render() {
    return (
      <CardItem>
        <Body>
          <Text>Content 1</Text>
        </Body>
      </CardItem>
    );
  }
}

export default ContentItem;
