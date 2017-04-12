import { FETCH_LIST_SUDREDDIT } from '../actions/constants';

export default function subReddit(state = [], action) {
  switch (action.type) {
    case FETCH_LIST_SUDREDDIT:
      return action.payload
    default:
      return state;
  }
}
