import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";

const account = () => {
  const [showPassword, setshowPassword] = useState(false);
  const handleShowPassword = () => {
    setshowPassword((prev) => !prev);
  };
  return (
    <SafeAreaView
      className="bg-white flex-1"
      style={{
        paddingTop: heightPercentageToDP(16),
        paddingHorizontal: widthPercentageToDP(5),
      }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "position"}
        className="flex-1"
      >
        <View className="space-y-6">
          <Text className="text-2xl font-semibold"> Profile & Password</Text>
          <Text className="text-neutral-500 pr-7">
            Complete the following final data to enter the Mega Mall application
          </Text>
        </View>
        <View
          style={{ height: heightPercentageToDP(60) }}
          className="mt-14 space-y-8"
        >
          <View className="space-y-4">
            <Text>Full Name</Text>
            <TextInput
              placeholder="Example@gmail.com"
              className="border border-neutral-100 bg-neutral-50 p-3 rounded-lg"
            />
          </View>
          <View className="space-y-4">
            <Text>Password</Text>
            <View className="flex-row justify-between p-3 items-center border border-neutral-100 bg-neutral-50 rounded-lg">
              <TextInput
                placeholder="Example@gmail.com"
                className=""
                secureTextEntry={showPassword ? false : true}
              />
              <Pressable onPress={handleShowPassword}>
                <Ionicons
                  name={showPassword ? "eye-off-outline" : `eye-outline`}
                  size={heightPercentageToDP(2.7)}
                  color={"#737373"}
                />
              </Pressable>
            </View>
          </View>
        </View>
        <TouchableOpacity className="bg-primary py-4 rounded-xl">
          <Text className="text-white text-center font-medium">Continue</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default account;
