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
import { BlurView } from "expo-blur";
import { Avatar } from "@rneui/themed";

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
          <View className="flex-row my-7 justify-center items-center">
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

        <View className="h-1/4 mx-10 px-16">
          <Chart />
        </View>

        <BlurView
          intensity={6}
          tint="dark"
          style={[styles.card]}
          className="rounded-b-3xl"
        >
          <View className="flex-row justify-between px-8 py-5 items-center">
            <Text
              style={{ fontFamily: "RalewaySemiBold" }}
              className="text-black text-center text-lg"
            >
              Invest Your Money
            </Text>
            <View className="flex-row">
              <Icon
                type="MaterialIcons"
                size={30}
                name="supervised-user-circle"
                color={"#676767"}
              />
              <Avatar
                size={28}
                rounded
                source={{
                  uri: "https://randomuser.me/api/portraits/men/35.jpg",
                }}
                containerStyle={{ marginLeft: -6 }}
              />
              <Avatar
                size={28}
                rounded
                title="B"
                containerStyle={{ backgroundColor: "gray", marginLeft: -6 }}
              />
              <Avatar
                size={28}
                rounded
                source={{
                  uri: "https://randomuser.me/api/portraits/men/36.jpg",
                }}
                containerStyle={{ backgroundColor: "gray", marginLeft: -6 }}
              />
            </View>
          </View>

          <View className="items-center">
            <View className="flex-row justify-between px-8  items-center">
              <View className=" bg-black px-8 py-3 rounded-3xl flex-row items-center">
                <Icon
                  type="MaterialIcons"
                  size={22}
                  name="wallet"
                  color={"#FFFFFF"}
                />
                <Text
                  style={{ fontFamily: "RalewaySemiBold" }}
                  className="text-white px-2"
                >
                  $5,120.00
                </Text>
              </View>
              <View className="ml-[-7] flex bg-gray-300 justify-center z-20 w-14 h-14 rounded-full items-center">
                <Icon
                  type="MaterialIcons"
                  size={24}
                  name="add"
                  color={"#676767"}
                />
              </View>
              <View className=" bg-black px-8 py-3 ml-[-7] rounded-3xl flex-row items-center">
                <Icon
                  type="MaterialIcons"
                  size={22}
                  name="wallet"
                  color={"#FFFFFF"}
                />
                <Text
                  style={{ fontFamily: "RalewaySemiBold" }}
                  className="text-white px-2"
                >
                  $5,120.00
                </Text>
              </View>
            </View>
          </View>
          <View className="flex-row justify-between px-8 py-5 items-center">
            <Text
              style={{ fontFamily: "RalewaySemiBold" }}
              className="text-black text-center text-lg"
            >
              Invest Your Money
            </Text>
            <Text
              style={{ fontFamily: "RalewaySemiBold" }}
              className="text-black text-center text-lg"
            >
              Value
            </Text>
          </View>
        </BlurView>

        <View className="m-5 py-7 flex-row justify-between items-center">
          <View
            style={styles.white}
            className="flex justify-center w-20 h-20 rounded-full items-center"
          >
            <Icon
              type="MaterialIcons"
              size={24}
              name="arrow-back"
              color={"#676767"}
            />
          </View>
          <View className=" ">
            <Text
              style={{ fontFamily: "RalewaySemi=Bold" }}
              className=" text-3xl mt-5"
            >
              UpDay Chart
            </Text>
            <Text
              style={{ fontFamily: " RalewaySemiBold" }}
              className="text-gray-700 text-center text-base"
            >
              Feb 10,2025
            </Text>
          </View>
          <View
            style={styles.white}
            className="flex justify-center w-20 h-20 rounded-full items-center"
          >
            <Icon
              type="MaterialIcons"
              size={24}
              name="arrow-forward"
              color={"#676767"}
            />
          </View>
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
    backgroundColor: "rgba(240, 240, 240, 0.67)",
  },
  card: {
    overflow: "hidden",
    borderColor: "rgba(255, 255, 255, 0.1)",
    borderWidth: 1,
  },
});
