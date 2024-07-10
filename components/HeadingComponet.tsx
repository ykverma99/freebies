import { View, Text, Pressable } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { heightPercentageToDP } from "react-native-responsive-screen";

const HeadingComponet = ({
  title,
  isAll,
  hideAllCat,
  showAllCat,
  option,
  titleStyle,
}: {
  title: string;
  option: string;
  isAll?: boolean;
  titleStyle?: string;
  hideAllCat?: () => void;
  showAllCat?: () => void;
}) => {
  return (
    <View className="flex-row justify-between  items-center">
      <Text className={`text-xl font-medium ${titleStyle}`}>{title}</Text>
      {isAll ? (
        <Pressable onPress={hideAllCat}>
          <Entypo name="cross" size={heightPercentageToDP(3)} />
        </Pressable>
      ) : (
        <Pressable onPress={showAllCat}>
          <Text className="text-primary">{option}</Text>
        </Pressable>
      )}
    </View>
  );
};

export default HeadingComponet;
