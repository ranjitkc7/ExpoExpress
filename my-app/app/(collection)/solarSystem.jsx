import solarSystemQuestions from "../../data/solarSystemQuestion.json"
import QuestionList from "../../component/QuestionList.jsx"

const SolarSystemQA = () => {
  return (
      <QuestionList title="विश्वब्रह्माण्ड" data={solarSystemQuestions} />
  )
}

export default SolarSystemQA