import { StyleSheet, Text, View, Platform } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import SelectCard from "./SelectCard";

const Card = () => {
  if (Platform.OS === "ios") {
    return (
      <BlurView intensity={6} tint="dark" style={[styles.card]}>
        <View className="">
          <SelectCard />
        </View>
      </BlurView>
    );
  }

  // Android fallback
  return (
    <View style={[styles.card, styles.androidCard]}>
      <Text> Card</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 16,
    overflow: "hidden",
    borderColor: "rgba(255, 255, 255, 0.1)",
    borderWidth: 1,
    marginVertical: 8,
  },
  androidCard: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    elevation: 3,
  },
});
