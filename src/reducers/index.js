import { combineReducers } from 'redux';
import contentArticle from './article';
import subReddit from './subreddit';

const rootReducer = combineReducers({
  contentArticle,
  subReddit
});

export default rootReducer;
