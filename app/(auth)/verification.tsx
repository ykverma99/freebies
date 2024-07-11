import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import OTPInput from "@/components/OTPInput";
import { useRouter } from "expo-router";

const verification = () => {
  const router = useRouter();
  const goToAccountDetail = () => {
    router.replace("/account");
  };
  return (
    <SafeAreaView
      className="bg-white flex-1"
      style={{
        paddingTop: heightPercentageToDP(11),
        paddingHorizontal: widthPercentageToDP(5),
      }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "position"}
        className="flex-1"
      >
        <View className="space-y-6">
          <Text className="text-2xl font-semibold">Verification</Text>
          <Text className="text-neutral-500 max-w-xs">
            We have sent a verification code to example@gmail.com
          </Text>
        </View>
        <View style={{ height: heightPercentageToDP(60) }} className=" mt-14">
          <View className="flex-row items-center justify-between mb-5">
            <Text>Verification Code</Text>
            <Text className="text-primary">Re-send Code</Text>
          </View>
          <OTPInput />
        </View>
        <TouchableOpacity
          onPress={goToAccountDetail}
          className="bg-primary py-4 rounded-xl"
        >
          <Text className="text-white text-center font-medium">Continue</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default verification;
