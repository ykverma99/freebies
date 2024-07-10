import { Image, Text, View } from "react-native";
import React from "react";
import { heightPercentageToDP } from "react-native-responsive-screen";
import SearchInput from "./SearchInput";
import SaleCard from "./SaleCard";
import HomepageHeader from "./HomepageHeader";
import HeadingComponet from "./HeadingComponet";
import { FontAwesome5 } from "@expo/vector-icons";
import AllCategory from "./AllCategory";

const HomePageLoading = () => {
  return (
    <View
      style={{
        paddingTop: heightPercentageToDP(8),
      }}
    >
      <HomepageHeader />
      {/* divider */}
      <View className="h-[0.6px] my-4 bg-neutral-100" />
      {/* search input */}
      <SearchInput />
      {/* Sale cards */}
      <SaleCard />
      <View className="px-5 my-8">
        <HeadingComponet title="Categories" option="See All" />
        <AllCategory />
      </View>
    </View>
  );
};

export default HomePageLoading;
