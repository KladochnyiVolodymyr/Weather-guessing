import { ADD_GUEES, RESET_ANSWERS } from "../types";

const initState = {
  answers: [],
};

export const answersReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_GUEES:
      return { ...state, answers: [...state.answers, action.item] };
    case RESET_ANSWERS:
      return { ...state, answers: [] };
    default:
      return state;
  }
};
