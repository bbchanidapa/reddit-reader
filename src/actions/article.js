import axios from 'axios';
import { DEFAULT_API_ENDPOINT, DEFAULT_TAG, FETCH_ARTICLE, FETCH_ARTICLE_COMMENT, FETCH_SEARCH_ARTICLE } from './constants';

function getResponseData(url, type) {
  return (dispatch) => {
    return axios.get(url)
      .then(res => {
        dispatch(receiveArticleContentItem(res.data));
        switch (type) {
          case FETCH_ARTICLE:
            dispatch(receiveArticleContentItem(res.data));
          case FETCH_ARTICLE_COMMENT:
            dispatch(receiveArticleCommentContentItem(res.data));
          case FETCH_SEARCH_ARTICLE:
            dispatch(receiveSearchByWord(res.data));
          default:
            dispatch(receiveArticleContentItem(res.data));
        }
      })
      .catch(error => {
        throw(error);
      });
  };
}

export function fetchArticleListItem() {
  const url = `${DEFAULT_API_ENDPOINT}${DEFAULT_TAG}.json`;
  return getResponseData(url, FETCH_ARTICLE);
}

function receiveArticleContentItem(json) {
  return {
    type: FETCH_ARTICLE,
    payload: json
  };
}

export function fetchArticleCommentListItem() {

}

function receiveArticleCommentContentItem() {
  return {
    type: FETCH_ARTICLE_COMMENT,
    payload: json
  };
}

export function fetchSearchByWord() {

}

function receiveSearchByWord() {
  return {
    type: FETCH_SEARCH_ARTICLE,
    payload: json
  };
}