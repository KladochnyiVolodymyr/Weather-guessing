import { useSelector } from "react-redux";

const Results = () => {
  
  const winCounter  = useSelector(state => state.initCity.winCounter);

  return (
    <div className="city-name">
      <h2>Game over</h2>
      <p>
      {
        winCounter >= 3 ? 'You win' : 'You lost'
      }
      </p>
    </div>
  );
};

export default Results;
