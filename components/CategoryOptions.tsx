import { View, Text, Image, ImageSourcePropType } from "react-native";
import React from "react";

const CategoryOptions = ({
  src,
  title,
  containerStyle,
}: {
  title: string;
  src: ImageSourcePropType;
  containerStyle: string;
}) => {
  return (
    <View className="space-y-1 ">
      <View
        className={`h-14 w-14 rounded-md justify-center items-center ${containerStyle}`}
      >
        <Image source={src} />
      </View>
      <Text className="text-lg text-center">{title}</Text>
    </View>
  );
};

export default CategoryOptions;
