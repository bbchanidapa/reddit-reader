import { DEFAULT_API_ENDPOINT, DEFAULT_SUDREDDIT, DEFAULT_SORT, FETCH_ARTICLE } from './constants';
import getResponseData from './utils';

function receiveArticleContentItem(json) {
  return {
    type: FETCH_ARTICLE,
    payload: json
  };
}

export function fetchArticleListItem(sortby = DEFAULT_SORT) {
  const url = `${DEFAULT_API_ENDPOINT}${DEFAULT_SUDREDDIT}/${sortby}.json?limit=5`;
  return getResponseData(url, receiveArticleContentItem);
}

export function fetchArticleListItemBySubReddit(subreddit = DEFAULT_SUDREDDIT) {
  const url = `${DEFAULT_API_ENDPOINT}${subreddit}.json?limit=5`;
  return getResponseData(url, receiveArticleContentItem);
}