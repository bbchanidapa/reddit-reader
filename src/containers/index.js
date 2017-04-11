import React, { Component, PropTypes } from 'react';
import { Container } from 'native-base';
import HeaderContainer from './layouts/header';
import FooterContainer from './layouts/footer';
import { APP_TITLE, FOOTER_LIST } from '../config/constants';

class LayoutContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <Container>
        <HeaderContainer title={APP_TITLE} />
        {this.props.children.map(scene => React.createElement(scene.component))}
        <FooterContainer footer={FOOTER_LIST} />
      </Container>
    );
  }
}

LayoutContainer.propTypes = {
  children: PropTypes.node.isRequired
};

export default LayoutContainer;
