import { INIT_CITY, UPD_CITY_INDEX } from "../types";

const initState = {
  cities: ["Larnaca", "Paris", "Boston", "Tokio", "Kyiv"],
  currentCity: "",
  currentCityIndex: 0,
};

export const cityReducer = (state = initState, action) => {
  switch (action.type) {
    case INIT_CITY:
      return { ...state, currentCity: state.cities[state.currentCityIndex] };
    case UPD_CITY_INDEX:
      return { ...state, currentCityIndex: state.currentCityIndex + 1 };
    default:
      return state;
  }
};
