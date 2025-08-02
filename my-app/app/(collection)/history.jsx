import historyQuestions from '../../data/historyQuestion1';
import QuestionList from '../../component/QuestionList';

const History = () => {
    return <QuestionList title="इतिहास" data={historyQuestions} />;
};

export default History;
