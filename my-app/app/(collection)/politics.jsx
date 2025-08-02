import politicsQuestion  from '../../data/politicsQuestion.json';
import QuestionList from '../../component/QuestionList';

const PoliticsQA = () => {
  return (
    <QuestionList title="राजनीति" data={politicsQuestion} />
  )
}

export default PoliticsQA;