import { View, Text, FlatList, TouchableOpacity, } from 'react-native'
import { FontAwesome5, MaterialIcons, Ionicons } from '@expo/vector-icons';
import React from 'react'
import "../../global.css";
import { useRouter } from 'expo-router';

const MainPage = () => {
  const router = useRouter();
  xw
  const titles = [
    { id: 1, name: "History", icon: "history", iconLib: FontAwesome5, route: "history" },
    { id: 2, name: "Geography", icon: "map", iconLib: FontAwesome5, route: "geography" },
    { id: 3, name: "Politics", icon: "gavel", iconLib: FontAwesome5, route: "politics" },
    { id: 4, name: "Sports", icon: "football", iconLib: Ionicons, route: "sports" },
    { id: 5, name: "Science & Technology", icon: "science", iconLib: MaterialIcons, route: "science" },
    { id: 6, name: "Computer & IT", icon: "laptop", iconLib: FontAwesome5, route: "computer" },
    { id: 7, name: "IQ Tests", icon: "brain", iconLib: FontAwesome5, route: "iq" },
    { id: 8, name: "Culture & Religion", icon: "yin-yang", iconLib: FontAwesome5, route: "culture" },
    { id: 9, name: "Current Affairs", icon: "newspaper", iconLib: FontAwesome5, route: "currentAffairs" },
    { id: 10, name: "General Knowledge", icon: "lightbulb", iconLib: FontAwesome5, route: "general" },
  ];
  const renderItem = ({ item }) => {
    const IconComponent = item.iconLib;
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        className="flex-row h-[4rem] justify-between
    items-center px-4  w-[20rem] rounded-md bg-[#067eee] mb-[5px]">
        <Text className='text-white text-[1.2rem] font-[600]'>{item.name}</Text>
        <IconComponent name={item.icon} size={24} color="white" />
      </TouchableOpacity>
    )
  }
  return (
    <View className="flex-1 items-center justify-center">
      <View className="mt-3 ">
        <FlatList
          data={titles}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />

      </View>
    </View>
  )
}

export default MainPage