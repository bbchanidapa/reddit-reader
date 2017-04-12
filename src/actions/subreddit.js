import { DEFAULT_API_SUBREDDIT, FETCH_LIST_SUDREDDIT } from './constants';
import getResponseData from './utils';

function receiveListSubreddit(json) {
  return {
    type: FETCH_LIST_SUDREDDIT,
    payload: json
  };
}

export default function fecthListSubreddit() {
  const url = DEFAULT_API_SUBREDDIT;
  return getResponseData(url, receiveListSubreddit);
}

