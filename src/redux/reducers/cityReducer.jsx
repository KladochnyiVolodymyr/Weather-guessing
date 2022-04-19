import { INIT_CITY } from "../types";

const initState = {
  cities: ['Larnaca', 'Paris', 'Boston', 'Tokio', 'Kyiv'],
  currentCity: ''
};

export const cityReducer = (state = initState, action) => {
  switch (action.type) {
    case INIT_CITY:
      return { ...state, currentCity: state.cities[action.randomNumber] };
    default:
      return state;
  }
};
