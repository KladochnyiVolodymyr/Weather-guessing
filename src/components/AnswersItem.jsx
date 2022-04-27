import { useState, useEffect } from "react";
import classNames from "classnames";
import { useSelector } from "react-redux";

const AnswersItem = ({ item }) => {

  const [currentItemIndex, setCurrentIndex] = useState();


  useEffect(() => {
    setCurrentIndex(currentCityIndex);
  }, []);

  const { guees, real, winnerStatus } = item;
  const loading = useSelector((state) => state.loader.loading);
  const currentCityIndex = useSelector((state) => state.city.currentCityIndex);
  const answersLenght = useSelector((state) => state.answers);
  const itemClass = classNames("list-group-item", { "list-group-item-success": winnerStatus, "list-group-item-danger": !winnerStatus });


  console.log(answersLenght.length);

  return (
    <div className={itemClass}>
      {!loading || (answersLenght.length !== currentItemIndex) ? (
        <>
          <p>{guees}</p>
          <p>Was {real}</p>
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default AnswersItem;
