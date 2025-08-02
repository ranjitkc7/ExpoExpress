import { View, Text, FlatList, TouchableOpacity, StatusBar } from 'react-native';
import React, { useState, useEffect } from 'react';
import "../../global.css";
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext';

const SettingPage = () => {
    const { mode, toggleTheme } = useTheme();

    const [selectedLanguage, setSelectedLanguage] = useState(1);
    const [selectedMode, setSelectedMode] = useState(mode === "dark" ? 2 : 1);

    useEffect(() => {
        toggleTheme(selectedMode === 2 ? "dark" : "light");
    }, [selectedMode]);

    const languages = [
        { id: 1, name: "English" },
        { id: 2, name: "Nepali" },
    ];
    const modes = [
        { id: 1, name: "Light" },
        { id: 2, name: "Dark" },
    ]

    const renderItemLanguage = ({ item }) => (
        <TouchableOpacity
            activeOpacity={0.8}
            className="flex-row  justify-between items-center px-4 h-10 w-full 
             border-b-[2px] border-white"
            onPress={() => setSelectedLanguage(item.id)}
        >
            <Text className="text-white text-[1.1rem]">{item.name}</Text>
            <Ionicons
                name={
                    selectedLanguage === item.id
                        ? 'radio-button-on'
                        : 'radio-button-off'
                }
                size={24}
                color="white"
            />
        </TouchableOpacity>

    );
    const renderItemMode = ({ item }) => (
        <TouchableOpacity
            activeOpacity={0.8}
            className="flex-row  justify-between items-center px-4 h-10 w-full  border-b-2 border-white"
            onPress={() => setSelectedMode(item.id)}
        >
            <Text className="text-white text-[1.1rem]">{item.name}</Text>
            <Ionicons
                name={
                    selectedMode === item.id
                        ? 'radio-button-on'
                        : 'radio-button-off'
                }
                size={24}
                color="white"
            />
        </TouchableOpacity>
    )
    return (
        <View className="p-[12px] ">
            <StatusBar
                barStyle={mode === "dark" ? "light-content" : "dark-content"}
                backgroundColor={mode === "dark" ? "#000" : "#ffffff"}
            />
            <Text className="text-[1.2rem] font-[600] mb-2">Language</Text>
            <View className="h-[5.3rem] w-full bg-[#067eee] rounded-md">
                <FlatList
                    data={languages}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItemLanguage}
                />
            </View>
            <Text className="mt-[1rem] text-[1.2rem] font-[600] mb-2">Mode</Text>
            <View className="h-[5.3rem] w-full bg-[#067eee] rounded-md">
                <FlatList
                    data={modes}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItemMode}
                />
            </View>
        </View>
    );
};

export default SettingPage;
