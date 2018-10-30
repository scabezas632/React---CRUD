import { combineReducers } from 'redux';
import peopleReducer from './PeopleReducer';
import ErrorReducer from './ErrorReducer';
import TableReducer from './TableReducer';

export default combineReducers({
  people: peopleReducer,
  error: ErrorReducer,
  table: TableReducer,
});
