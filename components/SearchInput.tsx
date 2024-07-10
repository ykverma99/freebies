import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { heightPercentageToDP } from "react-native-responsive-screen";

const SearchInput = () => {
  return (
    <View className="flex-row items-center mt-4 px-5 border bg-neutral-100 rounded-lg border-neutral-200 mx-5 py-3">
      <TextInput
        placeholder="Search Product name"
        className="text-lg w-[95%] "
      />
      <TouchableOpacity className="">
        <Ionicons
          name="search-outline"
          size={heightPercentageToDP(2.6)}
          color="black"
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
