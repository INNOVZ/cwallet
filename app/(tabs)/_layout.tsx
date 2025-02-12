import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "react-native";
import { Icon } from "@rneui/themed";
// import "../../global.css";
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor:
            colorScheme === "dark" ? "transparant" : "transparant", // Custom background
          borderTopWidth: 0, // Removes border if needed
          elevation: 0, // Removes shadow on Android
        },
        tabBarActiveTintColor: colorScheme === "dark" ? "#FFAC30" : "#000000", // Text color
        tabBarInactiveTintColor: colorScheme === "dark" ? "#888" : "#666",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon type="antdesign" size={24} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="wallet"
        options={{
          title: "Wallet",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon type="antdesign" size={24} name="linechart" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="user"
        options={{
          title: "User",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon type="antdesign" size={24} name="user" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
