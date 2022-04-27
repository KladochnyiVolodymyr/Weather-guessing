import classNames from "classnames";
import { useSelector } from "react-redux";

const AnswersItem = ({ item }) => {
  const { guees, real, winnerStatus } = item;
  const loading = useSelector((state) => state.loader.loading);
  const itemClass = classNames("answers-item", { "is-win": winnerStatus });

  return (
    <div className={itemClass}>
      {!loading ? (
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
