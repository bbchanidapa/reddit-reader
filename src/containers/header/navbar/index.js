
import React, { Component } from 'react';
import ItemListNavbar from '../../../components/header/navbar/itemlist';

class NavBarContainer extends Component {
  render() {
    return (
      <ItemListNavbar {...this.props} />
    );
  }
}

export default NavBarContainer;