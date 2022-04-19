import { ADD_GUEES } from "../types";
import api from "../../api";

export function addGuees(city, guees) {
  return async (dispatch) => {
    api.weather.fetchCityWeather(city).then((weather) => {
      let real = weather.main.temp;
      //take into account subzero temperatures
      let winnerStatus = guees - real > 5 ? false : true;
      dispatch({ type: ADD_GUEES, item: { guees, real, winnerStatus } });
    });
  };
}
