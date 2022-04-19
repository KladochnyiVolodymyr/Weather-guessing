import { ADD_GUEES, WIN_COUNTER } from "../types";
import api from "../../api";

export function addGuees(city, guees) {
  return async (dispatch) => {
    api.weather.fetchCityWeather(city).then((weather) => {
      let real = Math.round(weather.main.temp);
      //take into account subzero temperatures
      let winnerStatus = false;
      if( Math.abs(guees - real) < 5 ) {
        winnerStatus = true;
        dispatch({ type: WIN_COUNTER });
      }
      dispatch({ type: ADD_GUEES, item: { guees, real, winnerStatus } });
    });
  };
}
