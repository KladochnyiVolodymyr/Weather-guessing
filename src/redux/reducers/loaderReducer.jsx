import { SET_LOADER } from "../types";

const initState = {
  loading: false,
};

export const loaderReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_LOADER:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
