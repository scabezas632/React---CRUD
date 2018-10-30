import { CHANGE_PAGE, CHANGE_LIMIT, SHOW_TOTAL } from '../actions/types';

const initialState = {
  page: 1,
  limit: 10,
  total: 0,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CHANGE_PAGE:
      return {
        page: action.payload,
        limit: state.limit,
        total: state.total,
      };
    case CHANGE_LIMIT:
      return {
        page: 1,
        limit: action.payload,
        total: state.total,
      };
    case SHOW_TOTAL:
      return {
        page: state.page,
        limit: state.limit,
        total: action.payload,
      };
    default:
      return state;
  }
}
