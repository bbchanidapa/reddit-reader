import { FETCH_ARTICLE, FETCH_ARTICLE_COMMENT, FETCH_SEARCH_ARTICLE } from '../actions/constants';

export default function contentArticle(state = [], action) {
  switch (action.type) {
    case FETCH_ARTICLE:
      return action.payload;
    case FETCH_ARTICLE_COMMENT:
      return action.payload;
    case FETCH_SEARCH_ARTICLE:
      return action.payload;
      
    default:
      return state;
  }
}