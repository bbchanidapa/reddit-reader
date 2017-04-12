import { DEFAULT_API_ENDPOINT, DEFAULT_SUDREDDIT, DEFAULT_SORT, FETCH_ARTICLE } from './constants';
import getResponseData from './utils';

function receiveArticleContentItem(json) {
  return {
    type: FETCH_ARTICLE,
    payload: json
  };
}

export function fetchArticleListItem() {
  const url = `${DEFAULT_API_ENDPOINT}${DEFAULT_SUDREDDIT}${DEFAULT_SORT}.json?limit=5`;
  return getResponseData(url, receiveArticleContentItem);
}

export function fetchArticleListItemBySort(sortby) {
  const url = `${DEFAULT_API_ENDPOINT}${DEFAULT_SUDREDDIT}/${sortby}.json?limit=5`;
  return getResponseData(url, receiveArticleContentItem);
}

export function fetchArticleListItemBySubReddit(subreddit = DEFAULT_SUDREDDIT) {
  const url = `${DEFAULT_API_ENDPOINT}${subreddit}.json?limit=5`;
  return getResponseData(url, receiveArticleContentItem);
}

// function receiveArticleCommentContentItem() {
//   return {
//     type: FETCH_ARTICLE_COMMENT,
//     payload: json
//   };
// }

// function receiveSearchByWord() {
//   return {
//     type: FETCH_SEARCH_ARTICLE,
//     payload: json
//   };
// }