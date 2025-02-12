import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  SafeAreaView,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "@rneui/themed";
import Card from "../../components/Card";

const wallet = () => {
  const colorScheme = useColorScheme();

  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

  return (
    <LinearGradient
      colors={["#CBD3E5", "#EBE0D2", "#C6D7DD"]}
      style={[styles.container, themeContainerStyle]}
    >
      <SafeAreaView className="flex-1">
        <View className="flex justify-center items-center">
          <Text className="font-bold text-4xl mt-5">My Wallet</Text>
        </View>
        <View className="flex-row mt-5 justify-center items-center">
          <Text className="font-bold text-2xl mt-9">%</Text>
          <Text className=" text-center font-regular text-8xl mt-3">32</Text>
          <View>
            <Text className=" text-center font-light text-sm">(Gr)</Text>
            <Icon
              type="MaterialIcons"
              size={30}
              name="arrow-drop-up"
              color={"#676767"}
              className="pt-7"
            />
          </View>
        </View>
        <View className="h-1/4 mx-5">
          <Card />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default wallet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
  },
  lightContainer: {
    backgroundColor: "#d0d0c0",
  },
  darkContainer: {
    backgroundColor: "#171822",
  },
  lightThemeText: {
    color: "#242c40",
  },
  darkThemeText: {
    color: "#d0d0c0",
  },
  gray: {
    backgroundColor: "rgba(205, 205, 205, 0.4)",
  },
  white: {
    backgroundColor: "rgba(205, 205, 205, 0.4)",
  },
});
