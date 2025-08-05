import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import "../global.css";
import React, { useState } from 'react';
import { useRouter } from "expo-router";
import { FontAwesome5, AntDesign } from '@expo/vector-icons';
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    username: yup.string().required("Username is required"),
    email: yup.string().email("Invalid email format").required("Email is required"),
    password: yup
        .string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .matches(/[A-Z]/, "Must include an uppercase letter")
        .matches(/[a-z]/, "Must include a lowercase letter")
        .matches(/[0-9]/, "Must include a number")
        .matches(/[!@#$%^&*]/, "Must include a special character"),
    confirmPassword: yup
        .string()
        .required("Confirm your password")
        .oneOf([yup.ref("password")], "Passwords must match"),
});

const RegisterPage = () => {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [showconfirmPassword, setShowConfirmPassword] = useState(false);

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        try {
            const res = await fetch("http://192.168.1.5:5000/signUp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const resData = await res.json();

            if (res.ok) {
                Alert.alert("Success", resData.message || "Registered successfully!", [
                    { text: "OK", onPress: () => router.push("/logIn") },
                ]);
            } else {
                Alert.alert("Error", resData.message || "Registration failed");
            }
        } catch (error) {
            console.error(error);
            Alert.alert("Error", "Something went wrong. Please try again later.");
        }
    };

    return (
        <View className="flex:1 justify-start items-center h-[100%] p-6 bg-gray-300">
            <Text className="text-3xl font-bold mt-[2rem] text-[#067eee]">Registration Form</Text>

            {/* <Image
                source={require('../assets/sign1.png')}
                className="w-[27rem] h-[16rem] rounded-full"
            /> */}

            <View className="w-full mt-[4rem] h-auto rounded-md bg-blue-100 px-2 pb-4">
                <Controller
                    control={control}
                    name='username'
                    render={({ field: { onChange, value } }) => (
                        <TextInput
                            className="bg-white p-2 rounded-[6px] w-full mt-[1rem] h-[3.2rem] text-[1.1rem]"
                            placeholder='Enter the username'
                            value={value}
                            onChangeText={onChange}
                            placeholderTextColor="#023047"
                        />
                    )}
                />
                {errors.username && <Text className="text-red-500 text-center">{errors.username.message}</Text>}

                <Controller
                    control={control}
                    name="email"
                    render={({ field: { onChange, value } }) => (
                        <TextInput
                            className="bg-white p-2 rounded-[6px] w-full mt-[1rem] h-[3.2rem] text-[1.1rem]"
                            placeholder='Enter the email'
                            value={value}
                            onChangeText={onChange}
                            placeholderTextColor="#023047"
                        />
                    )}
                />
                {errors.email && <Text className="text-red-500 text-center">{errors.email.message}</Text>}

                <View className="flex relative w-full">
                    <Controller
                        control={control}
                        name="password"
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                className="bg-white p-2 rounded-[6px] w-full mt-[1rem] h-[3.2rem] text-[1.1rem]"
                                placeholder='Enter the password'
                                secureTextEntry={!showPassword}
                                value={value}
                                onChangeText={onChange}
                                placeholderTextColor="#023047"
                            />
                        )}
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
                {errors.password && <Text className="text-red-500 text-center">{errors.password.message}</Text>}

                <View className="flex relative w-full">
                    <Controller
                        control={control}
                        name="confirmPassword"
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                className="bg-white p-2 rounded-[6px] w-full mt-[1rem] h-[3.2rem] text-[1.1rem]"
                                placeholder='Confirm the password'
                                secureTextEntry={!showconfirmPassword}
                                value={value}
                                onChangeText={onChange}
                                placeholderTextColor="#023047"
                            />
                        )}
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
                {errors.confirmPassword && <Text className="text-red-500 text-center">{errors.confirmPassword.message}</Text>}

                <TouchableOpacity
                    onPress={handleSubmit(onSubmit)}
                    className="bg-[#00FF00] px-4 py-2 mt-[1rem] rounded-[8px] w-full"
                >
                    <Text className="text-[1.2rem] font-bold text-center">Register</Text>
                </TouchableOpacity>
            </View>

            <View className="flex-row mt-[1rem]">
                <Text className="text-[1.2rem]">If already have an account? </Text>
                <TouchableOpacity onPress={() => router.push("/logIn")}>
                    <Text className="font-bold text-[1.1rem] text-[#067eee]">LogIn</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default RegisterPage;
