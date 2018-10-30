import axios from 'axios';

import { CHANGE_PAGE, CHANGE_LIMIT, SHOW_TOTAL } from './types';

export const setPage = page => {
  return {
    type: CHANGE_PAGE,
    payload: page,
  };
};

export const setLimit = limit => {
  return {
    type: CHANGE_LIMIT,
    payload: limit,
  };
};

export const showTotal = () => async dispatch => {
  const response = await axios.get('http://localhost:3000/people');
  dispatch({
    type: SHOW_TOTAL,
    payload: response.data.length,
  });
};
