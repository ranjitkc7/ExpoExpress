import currentAffairsQuestions from "../../data/currentAffairsQuestion.json";
import QuestionList from '../../component/QuestionList';

const currentAffairsQA = () => {
    return (
        <QuestionList title="वर्तमान विचार" data={currentAffairsQuestions} />
    )
}

export default currentAffairsQA;