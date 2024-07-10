import { Image, ScrollView, Text, View } from "react-native";
import React, { useState } from "react";
import { heightPercentageToDP } from "react-native-responsive-screen";
import SearchInput from "./SearchInput";
import SaleCard from "./SaleCard";
import HomepageHeader from "./HomepageHeader";
import HeadingComponet from "./HeadingComponet";
import { FontAwesome5 } from "@expo/vector-icons";
import AllCategory from "./AllCategory";
import ProductCard from "./ProductCard";

const HomePageLoading = () => {
  const [isAll, setIsAll] = useState(false);
  const showAllCat = () => {
    setIsAll(true);
  };
  const hideAllCat = () => {
    setIsAll(false);
  };
  return (
    <View
      style={{
        paddingTop: heightPercentageToDP(8),
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <HomepageHeader />
        {/* divider */}
        <View className="h-[0.6px] my-4 bg-neutral-100" />
        {/* search input */}
        <SearchInput />
        {/* Sale cards */}
        <SaleCard />
        {/* category */}
        <View className="px-5 my-8">
          <HeadingComponet
            option="See All"
            title="Categories"
            isAll={isAll}
            showAllCat={showAllCat}
            hideAllCat={hideAllCat}
          />
          <AllCategory isAll={isAll} />
        </View>
        {/* Feature product */}
        <View className="px-5 space-y-6">
          <HeadingComponet
            titleStyle="font-normal text-lg"
            option="See All"
            title="Featured Product"
          />
          <View className="flex-row justify-between">
            <ProductCard />
            <ProductCard />
          </View>
        </View>

        {/* Sale cards */}
        <SaleCard />
        {/* best seller */}
        <View className="px-5 mt-7 space-y-6">
          <HeadingComponet
            titleStyle="font-normal text-lg"
            option="See All"
            title="Best Sellers"
          />
          <View className="flex-row justify-between">
            <ProductCard />
            <ProductCard />
          </View>
        </View>

        {/* Sale cards */}
        <SaleCard />
        {/* New Arrival */}
        <View className="px-5 mt-7 space-y-6">
          <HeadingComponet
            titleStyle="font-normal text-lg"
            option="See All"
            title="New Arrival"
          />
          <View className="flex-row justify-between">
            <ProductCard />
            <ProductCard />
          </View>
        </View>
        {/* Top Rated Product */}
        <View className="px-5 mt-7 space-y-6">
          <HeadingComponet
            titleStyle="font-normal text-lg"
            option="See All"
            title="Top Rated Product"
          />
          <View className="flex-row justify-between">
            <ProductCard />
            <ProductCard />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomePageLoading;
