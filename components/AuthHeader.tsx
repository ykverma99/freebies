import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const AuthHeader = () => {
  return (
    <View
      style={{
        paddingTop: heightPercentageToDP(7),
        paddingLeft: widthPercentageToDP(5),
      }}
      className="bg-white justify-center"
    >
      <TouchableOpacity onPress={() => router.back()} activeOpacity={0.8}>
        <Ionicons name="chevron-back" size={heightPercentageToDP(3)} />
      </TouchableOpacity>
    </View>
  );
};

export default AuthHeader;
