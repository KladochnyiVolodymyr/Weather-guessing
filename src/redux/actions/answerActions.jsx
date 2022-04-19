import { ADD_GUEES } from "../types";
import api from "../../api";

export function addGuees(city, guees) {
  return async (dispatch) => {
    api.weather.fetchCityWeather(city).then((weather) => {
      let real = Math.round(weather.main.temp);
      //take into account subzero temperatures
      let winnerStatus = Math.abs(guees - real) < 5 ? true : false;
      dispatch({ type: ADD_GUEES, item: { guees, real, winnerStatus } });
    });
  };
}
