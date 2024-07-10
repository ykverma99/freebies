import { View, Text } from "react-native";
import React from "react";
import CategoryOptions from "./CategoryOptions";
import icons from "../constants/icons";

const AllCategory = () => {
  return (
    <View className="flex-row  flex-wrap">
      <CategoryOptions
        src={icons.carrot}
        title="Foods"
        containerStyle="bg-green-100"
      />
      <CategoryOptions
        src={icons.fruit}
        title="Gift"
        containerStyle="bg-red-100"
      />
      <CategoryOptions
        src={icons.egg}
        title="Fashion"
        containerStyle="bg-yellow-100"
      />
      <CategoryOptions
        src={icons.meat}
        title="Gadget"
        containerStyle="bg-purple-100"
      />
      <CategoryOptions
        src={icons.carrot}
        title="Computer"
        containerStyle="bg-green-100"
      />
      <CategoryOptions
        src={icons.fruit}
        title="Souvenir"
        containerStyle="bg-red-100"
      />
    </View>
  );
};

export default AllCategory;
