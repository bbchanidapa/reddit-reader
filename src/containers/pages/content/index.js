import React, { Component, PropTypes } from 'react';
import { Content, Container, Spinner } from 'native-base';
import { connect } from 'react-redux';
import SortTypeBar from './cards';
import { fetchArticleListItem, fetchArticleListItemBySort } from '../../../actions/article';
import { SORTBY_LIST } from '../../../config/constants';

class ContentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentWillMount() {
    this.props.fetchArticleListItem();
    this.setState({ isLoading: false })
  }
  renderContent() {
    if (!this.state.isLoading) {
      return (
        <Content>
          <SortTypeBar
            sortType={SORTBY_LIST}
            actionSort={this.props.fetchArticleListItemBySort}
            contentArticle={this.props.contentArticle}
          />
        </Content>
      );
    }
    return (<Spinner color="blue" />);
  }

  render() {
    return (
      <Container>
        {this.renderContent.call(this)}
      </Container>
    );
  }
}

ContentContainer.propTypes = {
  fetchArticleListItem: PropTypes.func.isRequired,
  contentArticle: PropTypes.object.isRequired
};

export default connect(
  state => ({
    contentArticle: state.contentArticle
  }), {
    fetchArticleListItem,
    fetchArticleListItemBySort
  }
)(ContentContainer)
