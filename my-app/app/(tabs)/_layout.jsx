import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

const LayoutPage = () => {
    return (
        <Tabs
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#00FF00",
                    borderBottomColor: "#000000",
                    borderBottomWidth: 1,
                },
                tabBarStyle: {
                    backgroundColor: "#000000",
                    height: 60,
                    marginBottom:10,
                },
                tabBarActiveTintColor: "#00FF00",
                tabBarInactiveTintColor: "white",
                headerTintColor: "#ffffff"
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
        </Tabs>
    );
};

export default LayoutPage;
