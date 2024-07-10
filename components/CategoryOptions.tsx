import { View, Text, Image, ImageSourcePropType } from "react-native";
import React from "react";

const CategoryOptions = ({
  src,
  title,
  containerStyle,
}: {
  title: string;
  src: ImageSourcePropType;
  containerStyle?: string;
}) => {
  return (
    <View className="space-y-1 mr-7 mb-4">
      <View
        className={`h-[52] w-[52px] rounded-md justify-center items-center bg-neutral-200 ${containerStyle}`}
      >
        {/* <Image source={src} /> */}
      </View>
      <Text className="text-center">{title}</Text>
    </View>
  );
};

export default CategoryOptions;
