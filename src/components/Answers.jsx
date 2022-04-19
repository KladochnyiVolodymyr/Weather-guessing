import { useSelector } from "react-redux";
import AnswersItem from "./AnswersItem";

const Answers = () => {
  const answers = useSelector((state) => {
    const { answers } = state;
    return answers.answers;
  });

  const buildListItems = () => {
    //index for key???
    return answers.map((item, index) => (
      <AnswersItem key={index} item={item} />
    ));
  };

  return <div className="answers">{buildListItems()}</div>;
};

export default Answers;
