const AnswersItem = ({ item }) => {
  return (
    <div className={item.winnerStatus ? "answers-item answers-item_win" : "answers-item answers-item_loss"}>
      <p>{item.guees}</p>
      <p>Was {item.real}</p>
    </div>
  );
};

export default AnswersItem;
