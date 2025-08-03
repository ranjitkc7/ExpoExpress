import { Animated, TouchableOpacity } from "react-native";
import { Tabs } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useTheme } from "../../context/ThemeContext";
import { useRouter } from "expo-router";

const LayoutPage = () => {
    const { mode } = useTheme();
    const router = useRouter();
    return (
        <Tabs
            screenOptions={{
                animation: "fade",
                headerStyle: {
                    backgroundColor: mode === "dark" ? "#000000" : "#00FF00",
                    borderBottomColor: mode === "dark" ? "#fff" : "#000000",
                    borderBottomWidth: 1,
                    height: 50,
                },
                tabBarStyle: {
                    backgroundColor: mode === "dark" ? "#000000" : "#00FF00",
                    height: 55,
                },
                tabBarActiveTintColor: mode === 'dark' ? '#0f0' : '#00f',
                tabBarInactiveTintColor: mode === 'dark' ? '#aaa' : '#555',
                headerTintColor: mode === 'dark' ? '#fff' : '#000',

                headerRight : () => {
                    return(
                        <TouchableOpacity 
                         className="mr-4 h-[2.5rem] w-[2.5rem] justify-center
                         items-center rounded-full bg-white"
                         activeOpacity={0.9}
                         onPress={() => router.push("/logIn")}  
                        >
                            <AntDesign name="logout" size={22} 
                            color="black" />
                        </TouchableOpacity>
                    )
                }
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
