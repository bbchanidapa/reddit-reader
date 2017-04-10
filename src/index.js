import React, { Component } from 'react';
import { Container, Content  } from 'native-base';
import HeaderContainer from './containers/header';
import NavBarContainer from './containers/header/navbar';
import ContentContainer from './containers/content/';
import FooterContainer from './containers/footer';

export default class RedditReader extends Component {
  render() {
    return (
      <Container>
        <HeaderContainer />
        {/*<NavBarContainer />*/}
        <ContentContainer />
        <FooterContainer />
      </Container>
    );
  }
}