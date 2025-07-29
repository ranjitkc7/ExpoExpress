import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import "../global.css";
import React, { useState } from 'react'
import { useRouter } from "expo-router";
import { FontAwesome5, AntDesign} from '@expo/vector-icons';

const RegisterPage = () => {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [showconfirmPassword, setShowConfirmPassword] = useState(false);
    return (
        <View className="flex:1 justify-start items-center h-[100%] p-[6px]
    bg-gray-300 ">
            <Text className="text-3xl font-bold 
            mt-[2rem] text-[#067eee]">Registration Form</Text>
            <Image
                source={require('../assets/sign1.png')}
                className="w-[27rem] h-[16rem] rounded-full"
            />
            <View className="w-full h-[22rem] rounded-md bg-blue-100 px-[5px]">
                <TextInput
                    className="bg-white p-2 rounded-[6px] w-full mt-[1rem] h-[3.2rem] text-[1.1rem] focus:border-1
       focus:ring-[#023047] "
                    placeholder='Enter the username'
                    placeholderTextColor="#023047"
                />
                <TextInput
                    className="bg-white p-2 rounded-[6px] w-full mt-[1rem] h-[3.2rem] text-[1.1rem] focus:border-1
       focus:ring-[#023047] "
                    placeholder='Enter the email'
                    placeholderTextColor="#023047"
                />
                <View className="flex relative w-full">
                    <TextInput
                        className="bg-white p-2 rounded-[6px] w-full mt-[1rem] h-[3.2rem] text-[1.1rem] focus:border-1
       focus:ring-[#023047] "
                        placeholder='Enter the password'
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
                        secureTextEntry={!showconfirmPassword}
                        placeholderTextColor="#023047"
                    />
                    <TouchableOpacity
                        onPress={() => setShowPassword(!showconfirmPassword)}
                        className="absolute top-[1.6rem] right-[10px]">
                        {!showconfirmPassword ? (
                            <AntDesign name="eye" size={30} color="black" />
                        ) : (
                            <FontAwesome5 name="eye-slash" size={22} color="black" />
                        )}
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
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