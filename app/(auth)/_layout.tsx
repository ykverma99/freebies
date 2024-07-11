import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import AuthHeader from "@/components/AuthHeader";
import { StatusBar } from "expo-status-bar";

const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="signup"
          options={{ header: () => <AuthHeader /> }}
        />
        <Stack.Screen name="login" options={{ header: () => <AuthHeader /> }} />
        <Stack.Screen name="verification" options={{ headerShown: false }} />
        <Stack.Screen name="account" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="dark" />
    </>
  );
};

export default AuthLayout;
