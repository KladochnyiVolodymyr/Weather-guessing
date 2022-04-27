import { ADD_GUEES, RESET_ANSWERS } from "../types";

const initState = [];

export const answersReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_GUEES:
      return [ ...state, action.item ];
    case RESET_ANSWERS:
      return [];
    default:
      return state;
  }
};
