import { INIT_CITY, UPD_CITY_INDEX, WIN_COUNTER, RESET_CITY } from "../types";

const initState = {
  cities: ["Larnaca", "Paris", "Boston", "Tokio", "Kyiv"],
  currentCity: "",
  currentCityIndex: 0,
  winCounter: 0,
};

export const cityReducer = (state = initState, action) => {
  switch (action.type) {
    case INIT_CITY:
      return { ...state, currentCity: state.cities[state.currentCityIndex] };
    case UPD_CITY_INDEX:
      return { ...state, currentCityIndex: state.currentCityIndex + 1 };
    case WIN_COUNTER:
      return { ...state, winCounter: state.winCounter + 1 };
    case RESET_CITY:
      return { ...state, currentCityIndex: 0, winCounter: 0 };
    default:
      return state;
  }
};
