import { View, Text } from "react-native";
import React from "react";

const ProductCard = () => {
  return (
    <View className="bg-neutral-50 w-[155px] mb-3 items-center rounded-lg py-4 h-60">
      <View className="h-[60%] w-[80%] bg-neutral-200 rounded-lg"></View>
      <View className="w-[80%] space-y-2 mt-5">
        <View className="h-6 w-[70%] rounded bg-neutral-200"></View>
        <View className="h-6 w-[70%] rounded bg-neutral-200"></View>
      </View>
    </View>
  );
};

export default ProductCard;
