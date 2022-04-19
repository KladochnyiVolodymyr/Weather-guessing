import { INIT_CITY } from "../types";

export function initCity(randomNumber) {
  return async (dispatch) => {
    dispatch({ type: INIT_CITY, randomNumber });
  };
}
