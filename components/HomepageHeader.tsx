import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const HomepageHeader = () => {
  return (
    <View className="flex-row items-center justify-between px-5">
      <View style={{ width: widthPercentageToDP(10) }} />
      <Text className="text-primary text-2xl font-bold">Mega Mall</Text>
      <View className="flex-row space-x-3">
        <TouchableOpacity onPress={() => router.push("/signup")} className="">
          <Ionicons
            name="notifications-outline"
            size={heightPercentageToDP(2.6)}
            color="black"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons
            name="cart-outline"
            size={heightPercentageToDP(2.6)}
            color="black"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomepageHeader;
