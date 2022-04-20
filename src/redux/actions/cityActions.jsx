import { INIT_CITY, UPD_CITY_INDEX, RESET_CITY_INDEX } from "../types";

export function initCity() {
  return async (dispatch) => {
    dispatch({ type: INIT_CITY });
  };
}


export function updCityIndex() {
  return async (dispatch) => {
    dispatch({ type: UPD_CITY_INDEX });
  };
}

export function resetCityIndex() {
  return async (dispatch) => {
    dispatch({ type: RESET_CITY_INDEX });
  };
}