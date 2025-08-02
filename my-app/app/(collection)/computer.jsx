import QuestionList from '../../component/QuestionList';
import ComputerQuestions from "../../data/computerQuestion.json";

const ComputerQA = () => {
  return (
   <QuestionList title="कंप्यूटर" data={ComputerQuestions} />
  )
}

export default ComputerQA