import React, { Component } from 'react';
import { Container, Content  } from 'native-base';
import { connect } from 'react-redux';
import HeaderContainer from '../header';
import TabsContainer from '../header/navbar';
import FooterContainer from '../footer';
import { APP_TITLE, NAVBAR_LIST, FOOTER_LIST } from '../../config/constants';
import { fetchArticleListItem } from '../../actions/article';

export default class ConentContainer extends Component {
  componentWillMount() {
    // this.props.fetchArticleListItem();
  }

  render() {
    return (
      <Container>
        <HeaderContainer title={APP_TITLE} />
        <TabsContainer navbar={NAVBAR_LIST} />
        <FooterContainer footer={FOOTER_LIST} />
      </Container>
    );
  }
}

// export default connect(
//   (state) => ({
//     contentArticle: state,
//   }),{
//   fetchArticleListItem
// })(ConentContainer);