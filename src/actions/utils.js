import axios from 'axios';

export default function getResponseData(url, callbackf) {
  return dispatch => axios.get(url)
  .then((res) => {
    dispatch(callbackf(res.data));
  })
  .catch((error) => {
    throw (error);
  })
}
