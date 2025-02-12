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
import Chart from "../../components/Chart";

const wallet = () => {
  const colorScheme = useColorScheme();

  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

  return (
    <LinearGradient
      colors={["#CBD3E5", "#EBE0D2", "#C6D7DD"]}
      style={[styles.container, themeContainerStyle]}
    >
      <SafeAreaView className="flex-1 m-5">
        <View className="flex-row justify-between items-center">
          <View className="p-8"></View>
          <View className="">
            <Text
              style={{ fontFamily: "RalewaySemi=Bold" }}
              className=" text-4xl mt-5"
            >
              Invest
            </Text>
          </View>
          <View
            style={styles.white}
            className="flex justify-center w-14 h-14 rounded-full items-center"
          >
            <Icon
              type="MaterialIcons"
              size={24}
              name="settings"
              color={"#676767"}
            />
          </View>
        </View>

        <View className="mt-5 justify-center items-center">
          <View
            style={styles.white}
            className="flex justify-center w-14 h-14 rounded-full items-center"
          >
            <Icon
              type="MaterialIcons"
              size={24}
              name="trending-up"
              color={"#FFFFFF"}
              className="bg-black rounded-full"
            />
          </View>
          <View className="flex-row justify-center items-center">
            <Text className="mt-5 text-center font-regular text-8xl mt-3">
              32
            </Text>
            <View>
              <Text className="pt-2 text-center font-bold text-base">%</Text>
              <Icon
                type="MaterialIcons"
                size={30}
                name="arrow-drop-up"
                color={"#676767"}
                className="pt-7"
              />
            </View>
          </View>
        </View>
        <View className="h-1/4 mx-5">
          <Chart />
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
    backgroundColor: "rgba(234, 234, 234, 0.67)",
  },
});
