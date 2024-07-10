import { View, Text } from "react-native";
import React from "react";

const HeadingComponet = ({
  title,
  option,
}: {
  title: string;
  option: string;
}) => {
  return (
    <View className="flex-row justify-between items-center">
      <Text className="text-xl font-medium">{title}</Text>
      <Text className="text-primary">{option}</Text>
    </View>
  );
};

export default HeadingComponet;
