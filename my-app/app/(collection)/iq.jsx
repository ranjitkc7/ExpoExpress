import iqQuestions from '../../data/iqQuestion.json';
import QuestionList from '../../component/QuestionList';

const PoliticsQA = () => {
    return (
        <QuestionList title="IQ" data={iqQuestions} />
    )
}

export default PoliticsQA;

