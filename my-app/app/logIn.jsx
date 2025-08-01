import { View, Text, TextInput, TouchableOpacity, Image, Alert} from 'react-native'
import React, { useState } from 'react'
import { useRouter } from "expo-router";
import { FontAwesome5, AntDesign } from '@expo/vector-icons';

const LoginPage = () => {

  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogIn = async () => {
    if (!email || !password) {
      Alert.alert("Error!", "Please enter both email and password");
      return;
    }
    try {
      const res = await fetch("http://192.168.1.4:5000/logIn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      if (res.ok) {
        Alert.alert("Success", data.message || "Login successful!", [
          { text: "OK", onPress: () => router.push("/(tabs)") },
        ]);
      } else {
        Alert.alert("Error", data.message || "Invalid email or password");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Something went wrong. Please try again later.");
    }
  }

  return (
    <View className="flex:1 justify-start items-center h-[100%]
    bg-gray-300 p-6">
      <Text className="text-3xl font-bold 
            mt-[2rem] text-[#067eee]">Login Form</Text>
      <Image
        source={require('../assets/sign1.png')}
        className="w-[30rem] h-[18rem] rounded-full"
      />
      <View className="w-full h-[13rem] mt-[3rem] rounded-md bg-blue-100 px-[5px]">
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
            value={password}
            onChangeText={setPassword}
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
        <TouchableOpacity
        onPress={handleLogIn}
          className="bg-[#00FF00] px-4 py-2 mt-[1rem] rounded-[8px] w-full"

        >
          <Text className="text-[1.2rem] font-bold  text-center">
            Login
          </Text>
        </TouchableOpacity>
      </View>
      <View className=" flex-row mt-[1.5rem]">
        <Text className="text-[1.2rem]">If already haven't an account ? </Text>
        <TouchableOpacity
          className="pt-[-4px]"
          onPress={() => router.back("/")}
        >
          <Text className="font-bold text-[1.1rem] text-[#067eee]">SignUp</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default LoginPage