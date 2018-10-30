import {
  SHOW_PEOPLE,
  REMOVE_PERSON,
  ADD_PERSON,
  SHOW_PERSON,
  EDIT_PERSON,
} from '../actions/types';

const initialState = {
  people: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SHOW_PEOPLE:
      return {
        ...state,
        people: action.payload,
      };
    case REMOVE_PERSON:
      return {
        ...state,
        people: state.people.filter(person => person.id !== action.payload),
      };
    case ADD_PERSON:
      return {
        ...state,
        people: [...state.people, action.payload],
      };
    case SHOW_PERSON:
      return {
        ...state,
        person: action.payload,
      };
    case EDIT_PERSON:
      return {
        ...state,
        people: state.people.map(person => {
          if (person.id === action.payload.id) {
            person = action.payload;
            return person;
          }
          return person;
        }),
      };
    default:
      return state;
  }
}
