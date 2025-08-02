import { View, Text, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import "../global.css";

const QuestionList = ({ title, data }) => {
    const renderItem = ({ item }) => (
        <View className="pt-1 rounded-md mb-2 border-b-[1px] border-[#00FF00]">
            <View className="flex-row gap-[0.5rem]">
                <Text className="font-bold ">{`${item.id}.`}</Text>
                <Text className="text-[15px] font-bold">{item.question}</Text>
            </View>
            <View className="flex-row gap-[0.5rem]  mb-2 h-[1.6rem] items-center">
                <Feather name="arrow-right" size={17} color="black" />
                <Text className="text-gray-900 text-[13px] ">{item.correctAnswer}</Text>
            </View>
        </View>
    );

    return (
        <View className="pl-1 pr-2 flex-1 mb-[1rem]">
            <Text className="text-xl font-bold mb-2 mt-1 ml-2">{title}</Text>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default QuestionList;
