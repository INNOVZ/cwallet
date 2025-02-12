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
          backgroundColor: colorScheme === "dark" ? "#212330" : "#ffffff", // Custom background
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
        name="learn"
        options={{
          title: "Learn",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon type="antdesign" size={24} name="linechart" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="subscribe"
        options={{
          title: "Subscribe",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon type="antdesign" size={24} name="rocket1" color={color} />
          ),
        }}
      />{" "}
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
