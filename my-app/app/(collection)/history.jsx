import historyQuestions from '../../data/historyQuestion1.json';
import QuestionList from '../../component/QuestionList';

const HistoryQA = () => {
    return <QuestionList title="इतिहास" data={historyQuestions} />;
};

export default HistoryQA;
