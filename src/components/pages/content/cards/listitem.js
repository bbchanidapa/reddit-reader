import React, { Component, PropTypes } from 'react';
import { Content, Card } from 'native-base';
import CardItem from './item';

class CardItemList extends Component {
  renderRow() {
    if (this.props.contentArticle.data) {
      return this.props.contentArticle.data.children.map((item) => {
        return (
          <CardItem key={item.data.id} itemDetail={item.data} />
        );
      })
    }
    return true;
  }
  render() {
    return (
      <Content>
        {this.renderRow.call(this)}
      </Content>
    );
  }
}

CardItemList.propTypes = {

};

export default CardItemList;
