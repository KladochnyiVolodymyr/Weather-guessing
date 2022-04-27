import CityName from "./components/CityName";
import GuessForm from "./components/GuessForm";
import Answers from "./components/Answers";
import Results from "./components/Results";
import { initCity } from "./redux/actions/cityActions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  const currentAttempt = useSelector(
    (state) => state.city.currentCityIndex
  );
  const citiesCount = useSelector((state) => state.city.cities.length);

  useEffect(() => {
    dispatch(initCity());
  }, []);

  const isGameFinished = currentAttempt >= citiesCount;

  return (
    <div className="app container-fluid">
      <h1>Weather guessing</h1>
      {isGameFinished ? (
        <Results />
      ) : (
        <>
          <CityName />
          <GuessForm />
        </>
      )}
      <Answers />
    </div>
  );
};

export default App;
