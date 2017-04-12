import React, { Component, PropTypes } from 'react';
import { Container } from 'native-base';
import HeaderContainer from './layouts/header';
import FooterContainer from './layouts/footer';
import ACTION_PAGES from '../routers/layout';

class LayoutContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <Container>
        <HeaderContainer title="Conents" />
        {this.props.children.map(scene => React.createElement(scene.component))}
        <FooterContainer actionMenu={ACTION_PAGES} />
      </Container>
    );
  }
}

LayoutContainer.propTypes = {
  children: PropTypes.node.isRequired
};

export default LayoutContainer;
