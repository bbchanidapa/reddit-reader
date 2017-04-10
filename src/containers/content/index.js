import React, { Component } from 'react';
import { Content } from 'native-base';
import ContentItemList from '../../components/content/listitem';

class ContentContainer extends Component {
  render() {
    return (
      <Content>
        <ContentItemList />
      </Content>
    );
  }
}

export default ContentContainer;