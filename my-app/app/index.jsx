import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native'
import "../global.css";
import React, { useState } from 'react'
import { useRouter } from "expo-router";
import { FontAwesome5, AntDesign } from '@expo/vector-icons';

const RegisterPage = () => {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showconfirmPassword, setShowConfirmPassword] = useState(false);

    const handleRegister = async () => {
        if (!username || !email || !password || !confirmPassword) {
            Alert.alert("Please fill all fields");
            return;
        }
        if (password !== confirmPassword) {
            Alert.alert("Passwords do not match");
            return;
        }

        try {
            const res = await fetch("http://192.168.1.10:5000/signUp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, email, password }),
            });

            const data = await res.json();

            if (res.ok) {
                Alert.alert("Success", data.message || "Registered successfully!", [
                    { text: "OK", onPress: () => router.push("/logIn") },
                ]);
            } else {
                Alert.alert("Error", data.message || "Registration failed");
            }
        } catch (error) {
            console.error(error);
            Alert.alert("Error", "Something went wrong. Please try again later.");
        }
    };
    return (
        <View className="flex:1 justify-start items-center h-[100%] p-6
    bg-gray-300 ">
            <Text className="text-3xl font-bold 
            mt-[2rem] text-[#067eee]">Registration Form</Text>
            <Image
                source={require('../assets/sign1.png')}
                className="w-[27rem] h-[16rem] rounded-full"
            />
            <View className="w-full h-[22rem] rounded-md bg-blue-100 px-2">
                <TextInput
                    className="bg-white p-2 rounded-[6px] w-full mt-[1rem] h-[3.2rem] text-[1.1rem] focus:border-1
       focus:ring-[#023047] "
                    placeholder='Enter the username'
                    value={username}
                    onChangeText={setUsername}
                    placeholderTextColor="#023047"
                />
                <TextInput
                    className="bg-white p-2 rounded-[6px] w-full mt-[1rem] h-[3.2rem] text-[1.1rem] focus:border-1
       focus:ring-[#023047] "
                    value={email}
                    onChangeText={setEmail}
                    placeholder='Enter the email'
                    placeholderTextColor="#023047"
                />
                <View className="flex relative w-full">
                    <TextInput
                        className="bg-white p-2 rounded-[6px] w-full mt-[1rem] h-[3.2rem] text-[1.1rem] focus:border-1
       focus:ring-[#023047] "
                        placeholder='Enter the password'
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={!showPassword}
                        placeholderTextColor="#023047"
                    />
                    <TouchableOpacity
                        onPress={() => setShowPassword(!showPassword)}
                        className="absolute top-[1.6rem] right-[10px]">
                        {!showPassword ? (
                            <AntDesign name="eye" size={30} color="black" />
                        ) : (
                            <FontAwesome5 name="eye-slash" size={22} color="black" />
                        )}
                    </TouchableOpacity>
                </View>
                <View className="flex relative w-full">
                    <TextInput
                        className="bg-white p-2 rounded-[6px] w-full mt-[1rem] h-[3.2rem] text-[1.1rem] focus:border-1
       focus:ring-[#023047] "
                        placeholder='Re-type the password'
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        secureTextEntry={!showconfirmPassword}
                        placeholderTextColor="#023047"
                    />
                    <TouchableOpacity
                        onPress={() => setShowConfirmPassword(!showconfirmPassword)}
                        className="absolute top-[1.6rem] right-[10px]">
                        {!showconfirmPassword ? (
                            <AntDesign name="eye" size={30} color="black" />
                        ) : (
                            <FontAwesome5 name="eye-slash" size={22} color="black" />
                        )}
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    onPress={handleRegister}
                    className="bg-[#00FF00] px-4 py-2 mt-[1rem] rounded-[8px] w-full"

                >
                    <Text className="text-[1.2rem] font-bold  text-center">
                        Register
                    </Text>
                </TouchableOpacity>
            </View>
            <View className="flex-row  mt-[1rem]">
                <Text className="text-[1.2rem]">If already have an account ? </Text>
                <TouchableOpacity
                    className="pt-[-4px]"
                    onPress={() => router.push("/logIn")}
                >
                    <Text className="font-bold text-[1.1rem] text-[#067eee]">LogIn</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default RegisterPage