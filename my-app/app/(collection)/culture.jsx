import cultureQuestions from "../../data/cultureQuesion.json";
import QuestionList from '../../component/QuestionList';

const GeographyQA = () => {
    return (
        <QuestionList title="संस्कार" data={cultureQuestions} />
    )
}

export default GeographyQA;