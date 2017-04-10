import React, { Component } from 'react';
import { Container, Content  } from 'native-base';
import HeaderContainer from './containers/header';
import TabsContainer from './containers/header/navbar';
import FooterContainer from './containers/footer';
import { AppTitle, NavbarList, FooterList } from './config/constants';

export default class RedditReader extends Component {
  render() {
    return (
      <Container>
        <HeaderContainer title={AppTitle} />
        <TabsContainer navbar={NavbarList} />
        <FooterContainer footer={FooterList} />
      </Container>
    );
  }
}