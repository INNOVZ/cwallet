import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  SafeAreaView,
} from "react-native";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import { Icon } from "@rneui/themed";
import Card from "../../components/Card";

const wallet = () => {
  const colorScheme = useColorScheme();

  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

  return (
    <LinearGradient
      colors={["#CBD3E5", "#EBE0D2", "#F1F0F5"]}
      style={[styles.container, themeContainerStyle]}
    >
      <SafeAreaView className="flex-1 m-5">
        <View className="flex-row justify-between items-center">
          <View
            style={styles.white}
            className="flex justify-center w-14 h-14 rounded-full items-center"
          >
            <Icon
              type="MaterialIcons"
              size={24}
              name="search"
              color={"#676767"}
            />
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

        <View className="flex-row mt-5 justify-center items-center">
          <View>
            <Text
              style={{ fontFamily: " RalewayRegular" }}
              className="text-gray-700 text-center text-xs"
            >
              Premium Feb 10,2025
            </Text>
            <Text
              style={{ fontFamily: " RalewayLight" }}
              className="mt-4 text-gray-700 text-center text-3xl text-xs"
            >
              Jithin & Sanu
            </Text>
            <Text
              style={{ fontFamily: " RalewayLight" }}
              className="mt-8 text-gray-700 text-center text-5xl text-xs"
            >
              10.09 BTC
            </Text>
            <Text
              style={{ fontFamily: " RalewayRegular" }}
              className="mt-4 text-gray-700 text-center text-xs"
            >
              [000 ...08TRc83X]
            </Text>
            <Icon
              type="MaterialIcons"
              size={30}
              name="arrow-drop-down"
              color={"#676767"}
              className="pt-7"
            />
          </View>
        </View>

        <View style={styles.gray} className="mt-5 p-8 rounded-3xl">
          <View className="flex-row justify-between items-center">
            <Text className="text-gray-700 text-6xl text-xs">4 Mo.</Text>
            <Icon
              type="MaterialIcons"
              size={30}
              name="pending"
              color={"#000000"}
            />
          </View>
          <View className="mt-5 flex-row justify-between items-center">
            <Text
              style={{ fontFamily: "RalewaySemiBold" }}
              className="text-black text-center text-lg border-l pl-3 border-blue-700"
            >
              Earnings
            </Text>
            <Text
              style={{ fontFamily: "RalewaySemiBold" }}
              className="text-black text-center text-lg border-l pl-3 border-yellow-600"
            >
              Saving
            </Text>
            <Text
              style={{ fontFamily: "RalewaySemiBold" }}
              className="text-black text-center text-lg border-l pl-3 border-red-600"
            >
              Investment
            </Text>
          </View>
          <View className="mt-5 flex-row justify-between items-center">
            <Text
              style={{ fontFamily: "RalewaySemiBold" }}
              className="text-black text-center text-sm"
            >
              +23.78%
            </Text>

            <Text
              style={{ fontFamily: "RalewaySemiBold" }}
              className="text-black text-center text-sm"
            >
              +1.60%
            </Text>

            <Text
              style={{ fontFamily: "RalewaySemiBold" }}
              className="text-black text-center text-sm"
            >
              +23.78%
            </Text>
          </View>
        </View>

        <View className="mt-5 overflow-hidden flex-row justify-between items-center">
          <View style={styles.gray} className="mt-5 px-12 py-3 rounded-3xl">
            <Text
              style={{ fontFamily: "RalewaySemiBold" }}
              className="text-black text-center text-lg"
            >
              Send
            </Text>
          </View>
          <View style={styles.gray} className="mt-5 px-8 py-3 rounded-3xl">
            <Text
              style={{ fontFamily: "RalewaySemiBold" }}
              className="text-black text-center text-lg"
            >
              Recieved
            </Text>
          </View>
          <Link
            className="mt-5 bg-black px-12 py-3 rounded-3xl"
            href="/(modals)/invest"
          >
            <Icon
              type="MaterialIcons"
              size={22}
              name="wallet"
              color={"#FFFFFF"}
            />
            {/* </View> */}
          </Link>
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
    backgroundColor: "rgba(207, 207, 207, 0.64)",
  },
  white: {
    backgroundColor: "rgba(255, 255, 255, 0.37)",
  },
});
