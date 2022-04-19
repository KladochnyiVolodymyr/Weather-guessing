import CityName from "./components/CityName";
import GuessForm from "./components/GuessForm";
import Answers from "./components/Answers";
import { initCity } from "./redux/actions/cityActions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const App = () => {
  const randomNumber = Math.floor(Math.random() * 5);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initCity(randomNumber));
  }, []);

  return (
    <div className="app container-fluid">
      <h1>Weather guessing</h1>
      <CityName/>
      <GuessForm/>
      <Answers/>
    </div>
  );
}

export default App;