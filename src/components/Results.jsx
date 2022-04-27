import { useSelector, useDispatch } from "react-redux";
import { resetCityIndex, initCity } from "../redux/actions/cityActions";
import { resetAnswers } from "../redux/actions/answerActions";

const Results = () => {
  
  const dispatch = useDispatch();
  const winCounter  = useSelector(state => state.city.winCounter);

  const handleResetGame = () => {
    dispatch(resetCityIndex());
    dispatch(resetAnswers());
    dispatch(initCity());
  }

  return (
    <div className="city-name">
      <h2>Game over</h2>
      <p>
      {
        winCounter >= 3 ? 'You win' : 'You lost'
      }
      </p>
      <div className="btn btn-primary" onClick={handleResetGame}>
        Try again
      </div>
    </div>
  );
};

export default Results;
