import React, { Component, PropTypes } from 'react';
import { Image } from 'react-native';
import { Body, Right, Card, CardItem, Text } from 'native-base';
import isUrl from 'is-url';

class CardItemDetail extends Component {

  renderImage() {
    if (isUrl(this.props.itemDetail.thumbnail)) {
      return (
        <CardItem>
          <Body>
            <Image style={{ width: 300, height: 200, resizeMode: 'cover', alignSelf: 'center' }} source={{uri: this.props.itemDetail.thumbnail }} />
          </Body>
        </CardItem>
      );
    }
    return true;
  }
  render() {
    return (
      <Card>
        <CardItem>
          <Body>
            <Text>{this.props.itemDetail.title}</Text>
          </Body>
        </CardItem>
        {this.renderImage.call(this)}
        <CardItem>
          <Right>
            <Text>{`Author: ${this.props.itemDetail.author}`}</Text>
          </Right>
        </CardItem>
      </Card>
    );
  }
}

CardItemDetail.propTypes = {

};


export default CardItemDetail;