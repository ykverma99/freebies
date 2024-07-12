import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  Pressable,
  ScrollView,
  Alert,
} from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import Loading from "@/components/Loading";
import useAuth from "@/hooks/useAuth";

const signup = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const fullNameRef = useRef("");
  const [showPassword, setshowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  // const {} = useAuth()

  const handleShowPassword = () => {
    setshowPassword((prev) => !prev);
  };

  const handleRegister = async () => {
    if (!fullNameRef || !emailRef || !passwordRef) {
      Alert.alert("Sign Up", "Please fill all the fields!");
      return;
    }
    setLoading(true);

    // let res = await
  };
  return (
    <SafeAreaView
      className="bg-white flex-1"
      style={{
        paddingTop: heightPercentageToDP(3),
        paddingHorizontal: widthPercentageToDP(5),
      }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "position"}
        className="flex-1"
      >
        <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
          <View className="space-y-6">
            <Text className="text-2xl font-semibold">Register Account </Text>
            <Text className="text-neutral-500">
              Complete the following data to enter the Mega Mall application
            </Text>
          </View>
          <View
            style={{ height: heightPercentageToDP(50) }}
            className="mt-14 space-y-8"
          >
            <View className="space-y-4">
              <Text>Full Name</Text>
              <TextInput
                onChangeText={(value) => (fullNameRef.current = value)}
                placeholder="Yogesh verma"
                className="border border-neutral-100 bg-neutral-50 p-3 rounded-lg"
              />
            </View>
            <View className="space-y-4">
              <Text>Email</Text>
              <TextInput
                onChangeText={(value) => (emailRef.current = value)}
                placeholder="Example@gmail.com"
                className="border border-neutral-100 bg-neutral-50 p-3 rounded-lg"
              />
            </View>
            <View className="space-y-4">
              <Text>Password</Text>
              <View className="flex-row justify-between p-3 items-center border border-neutral-100 bg-neutral-50 rounded-lg">
                <TextInput
                  onChangeText={(value) => (passwordRef.current = value)}
                  placeholder="Password"
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
          {loading ? (
            <Loading size={heightPercentageToDP(2.7)} />
          ) : (
            <TouchableOpacity
              onPress={handleRegister}
              className="bg-primary py-4 rounded-xl"
            >
              <Text className="text-white text-center font-medium">
                Sign Up
              </Text>
            </TouchableOpacity>
          )}
          <View
            className="flex-row items-end justify-center"
            style={{ height: heightPercentageToDP(8) }}
          >
            <Text>Have an Account? </Text>
            <Pressable onPress={() => router.push("/login")}>
              <Text className="text-primary"> Log In</Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default signup;
