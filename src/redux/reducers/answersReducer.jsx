import { ADD_GUEES } from "../types";

const initState = {
    answers: []
};

export const answersReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_GUEES:
        return { ...state, answers: [...state.answers, action.item] };
    default:
      return state;
  }
};
