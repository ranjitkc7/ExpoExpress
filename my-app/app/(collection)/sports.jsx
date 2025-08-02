import { View, Text } from 'react-native'
import React from 'react'
import sportsQuestions from '../../data/sportQuestion.json';
import QuestionList from '../../component/QuestionList';

const SportsQA = () => {
  return (
   <QuestionList title="खेल" data={sportsQuestions} />
  )
}

export default SportsQA