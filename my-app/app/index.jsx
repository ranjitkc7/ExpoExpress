import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import "../global.css";
import { useRouter } from "expo-router";

const RegisterPage = () => {
    const router = useRouter();
    return (
        <View className="flex:1 justify-start items-center h-[100%]
    bg-gray-300 p-[1rem]">
            <Text className="text-3xl font-bold 
            mt-[2rem] text-[#067eee]">Registration Form</Text>
            <Image
                source={require('../assets/sign1.png')}
                className="w-[27rem] h-[16rem] rounded-full"
            />
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
            <TextInput
                className="bg-white p-2 rounded-[6px] w-full mt-[1rem] h-[3.2rem] text-[1.1rem] focus:border-1
       focus:ring-[#023047] "
                placeholder='Enter the password'
                secureTextEntry
                placeholderTextColor="#023047"
            />
            <TextInput
                className="bg-white p-2 rounded-[6px] w-full mt-[1rem] h-[3.2rem] text-[1.1rem] focus:border-1
       focus:ring-[#023047] "
                placeholder='Re-enter the password'
                secureTextEntry
                placeholderTextColor="#023047"
            />
            <TouchableOpacity
                className="bg-[#00FF00] px-4 py-2 mt-[1rem] rounded-[8px] w-full"

            >
                <Text className="text-[1.2rem] font-bold  text-center">
                    Register
                </Text>
            </TouchableOpacity>
            <View className=" flex-row mt-[1.5rem]">
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