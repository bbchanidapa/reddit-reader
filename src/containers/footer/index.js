import React, { Component } from 'react';
import FooterItemList from '../../components/footer/listitem';

class FooterContainer extends Component {
  render() {
    return (
      <FooterItemList {...this.props} />
    );
  }
}

export default FooterContainer;