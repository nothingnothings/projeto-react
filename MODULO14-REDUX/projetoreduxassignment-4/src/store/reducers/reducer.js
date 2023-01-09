/* eslint-disable no-unreachable */

import * as actionTypes from '../actions';




const initialState = {
  persons: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PERSON:
      const newPerson = {
        id: Math.random(),
        // name: 'Max',
        name: action.personData.name,
        // age: Math.floor(Math.random() * 40),
        age: action.personData.age
      };
        return {
            ...state,
            persons: state.persons.concat(newPerson)
        }
      break;
    case actionTypes.DELETE_PERSON:
        const updatedPersons = state.persons.filter(
            (person) => {
                return person.id !== action.personId;
            }
        )
        return {
            ...state,
            persons: updatedPersons
        }
      break;
    default:
      return state;
  }
};

export default reducer;
