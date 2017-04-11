import React, { Component } from 'react';
import { Card } from 'native-base';
import ContentItem from './item';

class ContentItemList extends Component {
  renderRow() {
    return (
      <ContentItem />
    )
  }
  render() {
    return (
      <Card>
        {this.renderRow.call(this)}
      </Card>
    );
  }
}

export default ContentItemList;