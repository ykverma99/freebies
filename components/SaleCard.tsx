import { View, FlatList } from "react-native";
import React from "react";

const arr = ["1", "2"];

const SaleCard = () => {
  return (
    <View>
      <FlatList
        data={arr}
        keyExtractor={(item, index) => item}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{ elevation: 5 }}
              className="bg-neutral-50 mt-8 shadow-lg shadow-black/25 w-80 py-7 px-5 space-y-3  rounded-lg  h-40"
            >
              <View className="h-7 w-60 bg-neutral-200 rounded-lg"></View>
              <View className="h-3 w-40 bg-neutral-200 rounded-lg"></View>
            </View>
          );
        }}
        ItemSeparatorComponent={() => <View className="mx-2" />}
        horizontal={true}
        contentContainerStyle={{
          marginLeft: 20,
          paddingRight: 30,
          // width: "100%",
          elevation: 3,
        }}
      />
    </View>
  );
};

export default SaleCard;
