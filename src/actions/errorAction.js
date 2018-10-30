import { SHOW_ERROR } from './types';

export const showError = status => {
  return {
    type: SHOW_ERROR,
    payload: status,
  };
};
