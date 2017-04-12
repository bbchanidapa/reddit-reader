import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Header, Left, Content, Picker, Item } from 'native-base';
import { fetchArticleListItemBySubReddit } from '../../../actions/article';
import fecthListSubreddit from '../../../actions/subreddit';
import { DEFAULT_SUDREDDIT } from '../../../actions/constants';

class HeaderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: DEFAULT_SUDREDDIT,
      results: {
        items: []
      }
    }
  }
  componentWillMount() {
    this.props.fecthListSubreddit();
  }
  onValueChange(value) {
    this.props.fetchArticleListItemBySubReddit(value);
    this.setState({
      selected: value
    });
  }
  renderSubRedditItem() {
    return this.map(item => (<Item label={item.toUpperCase()} value={item} inlineLabel />));
  }
  renderSubRedditBtn() {
    if (this.props.subReddit.data) {
      const subRedditItems = this.props.subReddit.data.children.map(item => item.data.display_name);
      return (
        <Content>
          <Picker
            iosHeader="Select one"
            mode="dropdown"
            textStyle={{ color: 'white' }}
            style={{ color: 'white' }}
            selectedValue={this.state.selected}
            onValueChange={this.onValueChange.bind(this)}
          >
            {this.renderSubRedditItem.apply(subRedditItems)}
          </Picker>
        </Content>
      );
    }
    return true;
  }
  render() {
    return (
      <Header hasTabs >
        <Left />
        {this.renderSubRedditBtn.call(this)}
      </Header>
    );
  }
}

HeaderContainer.propTypes = {
  fecthListSubreddit: PropTypes.func.isRequired,
  fetchArticleListItemBySubReddit: PropTypes.func.isRequired,
  subReddit: PropTypes.object
}

export default connect(
  state => ({
    subReddit: state.subReddit
  }), {
    fecthListSubreddit,
    fetchArticleListItemBySubReddit
  }
)(HeaderContainer);
