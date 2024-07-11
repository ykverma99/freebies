import { View } from "react-native";
import React from "react";

import { StatusBar } from "expo-status-bar";
import HomePageLoading from "@/components/HomePageLoading";

const index = () => {
  return (
    <View
      // style={{ paddingTop: hp(8), paddingHorizontal: wp(5) }}
      className="flex-1 h-full"
    >
      <StatusBar style="dark" />
      <HomePageLoading />
    </View>
  );
};

export default index;
