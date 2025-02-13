import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "@rneui/themed";
import Card from "../../components/Card";
import Chart from "../../components/Chart";
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryTooltip,
  VictoryLine,
} from "victory-native";

const wallet = () => {
  const colorScheme = useColorScheme();

  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

  return (
    <LinearGradient
      colors={["#CBD3E5", "#EBE0D2", "#F1F0F5"]}
      style={[styles.container, themeContainerStyle]}
    >
      <SafeAreaView className="flex-1">
        <View className="flex justify-center items-center">
          <Text className="font-bold text-4xl mt-5">My Wallet</Text>
        </View>
        <View className="flex-row mt-5 justify-center items-center">
          <Text className="font-bold text-2xl mt-9">%</Text>
          <Text className=" text-center font-regular text-8xl mt-3">7.9</Text>
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

        <Card />

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          // contentContainerStyle={styles.scrollViewContent}
          // className="flex-row mx-5 mt-3"
          className="flex  flex-row mx-5 mt-3 overflow-y-scroll "
        >
          <View className="flex h-[200] mx-3 bg-white w-1/3 p-5 rounded-3xl">
            <Text style={{ fontFamily: "Ralewayblack" }} className="text-xl">
              Business Cost
            </Text>
            <View className="w-15 h-15 py-5 overflow-none">
              <VictoryChart
                theme={VictoryTheme.material}
                width={100}
                height={50}
                padding={0}
              >
                <VictoryLine
                  data={[
                    { x: 1, y: 2 },
                    { x: 2, y: 3 },
                    { x: 3, y: 7 },
                    { x: 4, y: 8 },
                    { x: 5, y: 10 },
                  ]}
                />
              </VictoryChart>
            </View>
            <Text style={{ fontFamily: "Ralewaybold" }} className="text-3xl">
              $14.7K
            </Text>
            <Text>28.3%s</Text>
          </View>
          <View
            style={styles.white}
            className="flex h-[200] mx-3 bg-white w-1/3 p-5 rounded-3xl"
          >
            <Text style={{ fontFamily: "Ralewayblack" }} className="text-xl">
              Savings Monthly
            </Text>
            <View className="w-15 h-15 py-5 overflow-none">
              <VictoryChart
                theme={VictoryTheme.material}
                width={100}
                height={50}
                padding={0}
              >
                <VictoryLine
                  data={[
                    { x: 1, y: 2 },
                    { x: 2, y: 3 },
                    { x: 3, y: 5 },
                    { x: 4, y: 4 },
                    { x: 5, y: 7 },
                  ]}
                />
              </VictoryChart>
            </View>

            <View className="w-100 h-100"></View>
            <Text style={{ fontFamily: "Ralewaybold" }} className="text-3xl">
              $4.9K
            </Text>
            <Text>28.3%s</Text>
          </View>
          <View
            style={styles.white}
            className="flex h-[200] mx-3 bg-white w-1/3 p-7 rounded-3xl"
          >
            <Text style={{ fontFamily: "Ralewayblack" }} className="text-xl">
              Business Cost
            </Text>
            <View className="w-15 h-15 py-5 overflow-none">
              <VictoryChart
                theme={VictoryTheme.material}
                width={100}
                height={50}
                padding={0}
              >
                <VictoryLine
                  data={[
                    { x: 1, y: 2 },
                    { x: 2, y: 3 },
                    { x: 3, y: 5 },
                    { x: 4, y: 4 },
                    { x: 5, y: 7 },
                  ]}
                />
              </VictoryChart>
            </View>
            <Text style={{ fontFamily: "Ralewaybold" }} className="text-3xl">
              $1.9K
            </Text>
            <Text>28.3%s</Text>
          </View>
        </ScrollView>
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
    backgroundColor: "rgba(248, 248, 248, 0.74)",
  },
});
