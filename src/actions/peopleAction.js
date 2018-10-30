import axios from 'axios';

import {
  SHOW_PEOPLE,
  SHOW_PERSON,
  REMOVE_PERSON,
  ADD_PERSON,
  EDIT_PERSON,
} from './types';

export const showPeople = (page, limit) => async dispatch => {
  const response = await axios.get('http://localhost:3000/people', {
    params: {
      _page: page,
      _limit: limit,
    },
  });
  dispatch({
    type: SHOW_PEOPLE,
    payload: response.data,
  });
};

export const showPerson = id => async dispatch => {
  const response = await axios.get(`http://localhost:3000/people/${id}`);
  dispatch({
    type: SHOW_PERSON,
    payload: response.data,
  });
};

export const removePerson = id => async dispatch => {
  await axios.delete(`http://localhost:3000/people/${id}`);
  dispatch({
    type: REMOVE_PERSON,
    payload: id,
  });
};

export const addPerson = post => async dispatch => {
  const response = await axios.post('http://localhost:3000/people', post);
  dispatch({
    type: ADD_PERSON,
    payload: response.data,
  });
};

export const editPerson = person => async dispatch => {
  const response = await axios.put(
    `http://localhost:3000/people/${person.id}`,
    person,
  );
  dispatch({
    type: EDIT_PERSON,
    payload: response.data,
  });
};
