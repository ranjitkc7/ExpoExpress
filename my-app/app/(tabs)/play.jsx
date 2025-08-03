import { View, Text, StatusBar, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useTheme } from "../../context/ThemeContext";
import React, { useState } from "react";
import "../../global.css";
import { Feather } from '@expo/vector-icons';
import Animated, { SlideInRight, SlideInLeft } from 'react-native-reanimated';

import QuizCard from '../../component/QuizCard';

import historyQA from '../../data/historyQuestion1.json';
import sportsQA from '../../data/sportQuestion.json';
import politicsQA from '../../data/politicsQuestion.json';
import scienceQA from '../../data/scienceQuestion.json';
import geographyQA from '../../data/geographyQuestion.json';
import computerQA from '../../data/computerQuestion.json';
import iqQA from '../../data/iqQuestion.json';
import cultureQA from '../../data/cultureQuesion.json';
import currentAffairsQA from '../../data/currentAffairsQuestion.json';
import solarSystemQA from '../../data/solarSystemQuestion.json';

const PlayPage = () => {
  const { mode } = useTheme();

  const [searchItem, setSearchItem] = useState('');
  const [question, setQuestion] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answered, setAnswered] = useState([]);
  const [score, setScore] = useState(0);

  const handleSearch = async () => {
    try {
      const query = searchItem.trim().toLowerCase();
      if (query === "history") setQuestion(historyQA);
      else if (query === "sports") setQuestion(sportsQA);
      else if (query === "politics") setQuestion(politicsQA);
      else if (query === "science") setQuestion(scienceQA);
      else if (query === "geography") setQuestion(geographyQA);
      else if (query === "computer") setQuestion(computerQA);
      else if (query === "iq") setQuestion(iqQA);
      else if (query === "culture") setQuestion(cultureQA);
      else if (query === "current affairs") setQuestion(currentAffairsQA);
      else if (query === "solar system") setQuestion(solarSystemQA);
      else setQuestion([]);
      setCurrentIndex(0);
      setSearchItem('');
    } catch (error) {
      console.error("Error loading JSON:", error);
    }
  }

  const handleNext = () => {
    const currentQuestion = question[currentIndex];
    const selected = answered[currentQuestion.id];

    if (!answered[currentQuestion.id]) {
      alert("Please select an option");
      return;
    }
    if (selected === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
    setAnswered(prev => ({
      ...prev,
      [currentQuestion.id]: true
    }));

    if (currentIndex < question.length - 1) {
      setCurrentIndex(currentIndex + 1);
    };
  };
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  return (
    <Animated.View
      entering={SlideInRight.duration ? SlideInRight.duration(500) : SlideInRight.withDuration(500)}
      exiting={SlideInLeft.duration ? SlideInLeft.duration(500) : SlideInLeft.withDuration(500)}
      className="flex-1"
      style={{ backgroundColor: mode === "dark" ? "#000" : "#fff" }}
    >
      <StatusBar
        barStyle={mode === "dark" ? "light-content" : "dark-content"}
        backgroundColor={mode === "dark" ? "#000" : "#fff"}
      />

      <ScrollView
        className="flex-1 "
        contentContainerClassName="flex-1 mt-4 gap-4 pl-2 pr-3"
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View className="flex-1 absolute w-full pl-2 ">
          <TextInput
            value={searchItem}
            onChangeText={setSearchItem}
            placeholder="Enter the field"
            placeholderTextColor={mode === "dark" ? "#aaa" : "#555"}
            className="border-[1px] border-gray-700 w-full 
           text-[1.1rem] h-12 rounded-[12px] p-2 text-black bg-white "
          />
          <TouchableOpacity
            onPress={handleSearch}
            activeOpacity={0.8}
            className="absolute top-2 right-4">
            <Feather name="search" size={27} color="black" />
          </TouchableOpacity>
        </View>
        <View className="mt-[4rem] items-center justify-center w-[17rem] 
        h-[2.3rem] rounded-md  bg-[#00ff00] ml-[3.5rem]">
          <Text className="text-[1.5rem]">Score: {score} / {question.length}</Text>
        </View>
        <View className="">
          {
            question.length > 0 && (
              <QuizCard
                questionData={question[currentIndex]}
                id={currentIndex + 1}
                onSelectOption={(option) => {
                  setAnswered(prev => ({
                    ...prev,
                    [question[currentIndex].id]: option
                  }));
                }}
                handleNext={handleNext}
                handlePrev={handlePrev}
              />
            )
          }
        </View>
        
      </ScrollView>
    </Animated.View>
  );
};

export default PlayPage;
