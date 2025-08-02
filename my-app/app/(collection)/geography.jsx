import geographyQuestions from "../../data/geographyQuestion.json";
import QuestionList from '../../component/QuestionList';

const GeographyQA = () => {
  return (
      <QuestionList title="भूगोल" data={geographyQuestions} />
  )
}

export default GeographyQA