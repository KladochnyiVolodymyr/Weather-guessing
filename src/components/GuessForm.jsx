import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addGuees } from "../redux/actions/answerActions";


const GuessForm = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();
  const cityName  = useSelector(state => state.initCity.currentCity);

  const handleChange = (e) => setValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimedValue = value.trim();  
    if(trimedValue) {  
      dispatch(addGuees(cityName, trimedValue));
    }
    setValue("");
  };

  return (
    <div className="guess-form">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={value}
          type="text"
          placeholder="Your guess"
        />
        <input className="btn btn-primary" type="submit" value="Check" />
      </form>
    </div>
  );
};

export default GuessForm;
