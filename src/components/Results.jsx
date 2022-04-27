import { useSelector, useDispatch } from "react-redux";
import { resetCityIndex, initCity } from "../redux/actions/cityActions";
import { resetAnswers } from "../redux/actions/answerActions";
import classNames from "classnames";

const Results = () => {
  
  const dispatch = useDispatch();
  const winCounter  = useSelector(state => state.city.winCounter);
  let winStatus = winCounter >= 3;
  const titleClass = classNames({ "win": winStatus, "loser": !winStatus });

  const handleResetGame = () => {
    dispatch(resetCityIndex());
    dispatch(resetAnswers());
    dispatch(initCity());
  }

  return (
    <div className="city-name">
      <h2>Game over</h2>
      <h1 className={titleClass}>
      {
        winStatus ? 'You win' : 'You lost'
      }
      </h1>
      <div className="btn btn-primary" onClick={handleResetGame}>
        Try again
      </div>
    </div>
  );
};

export default Results;
