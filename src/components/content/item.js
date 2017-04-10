import React, { Component } from 'react';
import { CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';

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