import React, { Component } from 'react';
import FooterItemList from '../../../components/layouts/footer/listitem';

class FooterContainer extends Component {
  render() {
    return (
      <FooterItemList {...this.props} />
    );
  }
}

export default FooterContainer;
