import scienceQuestions from '../../data/scienceQuestion.json';
import QuestionList from '../../component/QuestionList';

const ScienceQA = () => {
  return (
   <QuestionList title="विज्ञान" data={scienceQuestions} />
  )
}

export default ScienceQA