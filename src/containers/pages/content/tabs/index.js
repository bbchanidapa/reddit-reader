
import React, { Component } from 'react';
import ItemListNavbar from '../../../../components/pages/content/listitem';

class TabsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <ItemListNavbar {...this.props} />
    );
  }
}

export default TabsContainer;
