import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const QuizCard = ({ questionData, id, handleNext, handlePrev,
    onSelectOption, selectedOption
}) => {
    const [selectOption, setSelectOption] = useState(null);
    const { question, options, correctAnswer } = questionData;

    return (
        <View className="h-[22rem] relative w-full mt-1 rounded-md bg-[#067eee] p-4">
            <Text className="text-[1.4rem] text-white">{`${id}. ${question}`}</Text>
            <View className="pt-3 pl-3">
                {options.map((option, index) => (
                    <TouchableOpacity
                        key={index}
                        className={`flex-row items-center p-2 mb-1 rounded-md ${selectOption === option ? "bg-[#003049]" : "bg-white"
                            }`}
                        onPress={() => {
                            onSelectOption(option);
                            setSelectOption(option)
                        }}
                        activeOpacity={0.8}
                    >
                        <View
                            className={`w-5 h-5 rounded-full border-2 mr-2 ${selectOption === option ? "border-[#00FF00] bg-[#00FF00]" : "border-gray-500 bg-transparent"
                                }`}
                        />
                        <Text
                            className={`text-base ${selectOption === option ? "text-white" : "text-black"
                                }`}
                        >
                            {option}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            <TouchableOpacity
                className="bg-[#00FF00] items-center justify-center absolute bottom-2 right-2 h-9 w-20 rounded-md"
                onPress={handleNext}
            >
                <Text className=" font-bold text-[1.1rem]">Next</Text>
            </TouchableOpacity>

            <TouchableOpacity
                className="bg-[#00FF00] items-center justify-center absolute bottom-2 left-2 h-9 w-20 rounded-md"
                onPress={handlePrev}
            >
                <Text className="font-bold text-[1.1rem]">Prev</Text>
            </TouchableOpacity>
        </View>
    );
};

export default QuizCard;
