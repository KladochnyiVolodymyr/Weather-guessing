import { useSelector } from "react-redux";

const CityName = () => {

  const cityName  = useSelector(state => state.city.currentCity);
  
  return (
    <div className="city-name">
      <h2>{cityName}</h2>
    </div>
  );
};

export default CityName;
