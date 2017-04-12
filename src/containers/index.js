import React, { Component, PropTypes } from 'react';
import { Container } from 'native-base';
import { connect } from 'react-redux';
import HeaderContainer from './layouts/header';
import FooterContainer from './layouts/footer';
import ACTION_PAGES from '../routers/layout';
import fecthListSubreddit from '../actions/subreddit';

class LayoutContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  componentWillMount() {
    this.props.fecthListSubreddit();
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
  children: PropTypes.node.isRequired,
  fecthListSubreddit: PropTypes.func.isRequired
};

export default connect(
  state => ({
    subReddit: state.subReddit
  }), {
    fecthListSubreddit,
  }
)(LayoutContainer);
