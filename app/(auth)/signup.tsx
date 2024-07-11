import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React from "react";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const signup = () => {
  const router = useRouter();
  const goToVerify = () => {
    router.replace("/verification");
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
        <View className="space-y-6">
          <Text className="text-2xl font-semibold">Register Account</Text>
          <Text className="text-neutral-500">
            Enter Email address to register
          </Text>
        </View>
        <View
          style={{ height: heightPercentageToDP(40) }}
          className="space-y-4 mt-14"
        >
          <Text>Email Address</Text>
          <TextInput
            placeholder="Example@gmail.com"
            className="border border-neutral-100 bg-neutral-50 p-3 rounded-lg"
            keyboardType="email-address"
          />
        </View>
        <TouchableOpacity
          onPress={goToVerify}
          className="bg-primary py-4 rounded-xl"
        >
          <Text className="text-white text-center font-medium">Continue</Text>
        </TouchableOpacity>
        <View
          className="flex-row items-end justify-center"
          style={{ height: heightPercentageToDP(18) }}
        >
          <Text className="text-neutral-500">Have an Account? </Text>
          <TouchableOpacity onPress={() => router.push("/login")}>
            <Text className="text-primary"> Sign In</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default signup;
