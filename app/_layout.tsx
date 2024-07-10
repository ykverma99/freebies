import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Feather, Ionicons } from "@expo/vector-icons";
import { heightPercentageToDP } from "react-native-responsive-screen";

const TabIcon = ({
  icon,
  color,
  focused,
  name,
}: {
  icon: any;
  color: string;
  focused: boolean;
  name: string;
}) => {
  return (
    <View className="items-center  justify-center  gap-2">
      {icon}
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarInactiveTintColor: "black",
          tabBarStyle: {
            backgroundColor: "white",
            height: heightPercentageToDP(9),
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "HOME",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                color={color}
                focused={focused}
                name="HOME"
                icon={
                  <Ionicons
                    name="home-outline"
                    color={color}
                    size={heightPercentageToDP(3)}
                  />
                }
              />
            ),
          }}
        />
        <Tabs.Screen
          name="wishlist"
          options={{
            title: "WISHLIST",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                color={color}
                focused={focused}
                name="WISHLIST"
                icon={
                  <Ionicons
                    name="heart-outline"
                    color={color}
                    size={heightPercentageToDP(3)}
                  />
                }
              />
            ),
          }}
        />
        <Tabs.Screen
          name="order"
          options={{
            title: "ORDER",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                color={color}
                focused={focused}
                name="ORDER"
                icon={
                  <Ionicons
                    name="bag-handle-outline"
                    color={color}
                    size={heightPercentageToDP(3)}
                  />
                }
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "ACCOUNT",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                color={color}
                focused={focused}
                name="ACCOUNT"
                icon={
                  <Feather
                    name="user"
                    color={color}
                    size={heightPercentageToDP(3)}
                  />
                }
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabLayout;
