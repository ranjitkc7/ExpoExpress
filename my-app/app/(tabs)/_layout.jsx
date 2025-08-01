import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useTheme } from "../../context/ThemeContext";

const LayoutPage = () => {
    const { mode } = useTheme();
    return (
        <Tabs
            screenOptions={{
                headerStyle: {
                    backgroundColor: mode === "dark" ? "#000000" : "#00FF00",
                    borderBottomColor: mode === "dark" ? "#fff" : "#000000",
                    borderBottomWidth: 1,
                },
                tabBarStyle: {
                    backgroundColor: mode === "dark" ? "#000000" : "#00FF00",
                    height: 60,
                    marginBottom: 10,
                },
                tabBarActiveTintColor: mode === 'dark' ? '#0f0' : '#00f',
                tabBarInactiveTintColor: mode === 'dark' ? '#aaa' : '#555',
                headerTintColor: mode === 'dark' ? '#fff' : '#000',
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="home" size={30} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="play"
                options={{
                    title: "Play",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="play-circle" size={30} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    title: "Settings",
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="settings" size={30} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
};

export default LayoutPage;
