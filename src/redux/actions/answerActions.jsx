import { ADD_GUEES, WIN_COUNTER, RESET_ANSWERS } from "../types";
import { loaderOff, loaderOn } from "./loaderActions";
import api from "../../api";

export function addGuees(city, guees) {
  return async (dispatch) => {
    dispatch(loaderOn());
    api.weather.fetchCityWeather(city).then((weather) => {
      let real = Math.round(weather.main.temp);
      let winnerStatus = false;
      if( Math.abs(guees - real) < 5 ) {
        winnerStatus = true;
        dispatch({ type: WIN_COUNTER });
      }
      dispatch({ type: ADD_GUEES, item: { guees, real, winnerStatus } });
      dispatch(loaderOff());
    });
  };
}

export function resetAnswers() {
  return async (dispatch) => {
    dispatch({ type: RESET_ANSWERS });
  }
}