import classNames from "classnames";

const AnswersItem = ({ item }) => {

  const {guees, real, winnerStatus} = item;

  let itemClass = classNames('answers-item', { 'is-win': winnerStatus });
  
  return (
    <div className={itemClass}>
      <p>{guees}</p>
      <p>Was {real}</p>
    </div>
  );
};

export default AnswersItem;
