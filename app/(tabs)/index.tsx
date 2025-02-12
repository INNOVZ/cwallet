import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  useColorScheme,
  ScrollView,
} from "react-native";
import SignalCards from "../../components/SelectCard";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const colorScheme = useColorScheme();

  // const themeTextStyle =
  //   colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

  return (
    <SafeAreaView style={[styles.container, themeContainerStyle]}>
      <View className=" flex m-5 conatiner flex-row ">
        <Text
          className="flex flex-start text-yellow-600 font-normal text-xl"
          style={{ fontFamily: "QuickSandBold" }}
        >
          Emaletx Crypto signals and Education
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} className="">
        <View className="p-5 mx-5 bg-[#212330] w-1/2 rounded-xl ">
          <Image
            source={require("../../assets/images/btc.png")}
            style={{ width: 50, height: 50 }}
          />
          <Text
            style={{ fontFamily: "QuickSandBold" }}
            className="flex flex-start text-[#BCBCBC] text-2xl text-2xl"
          >
            102.000 $
          </Text>
        </View>

        <View className=" ">
          <Text
            style={{ fontFamily: "QuickSandBold" }}
            className="mx-5 flex flex-start text-yellow-600 text-xl font-semibold mt-10"
          >
            Hot Tokens
          </Text>
          <View className="flex flex-row flex-wrap">
            <SignalCards />
            <SignalCards />
            <SignalCards />
          </View>
        </View>
        <View className=" ">
          <Text
            style={{ fontFamily: "QuickSandBold" }}
            className="mx-5 flex flex-start text-yellow-600 text-xl mt-10"
          >
            Latest Signals
          </Text>
          <View className="flex flex-row flex-wrap">
            <SignalCards />
            <SignalCards />
            <SignalCards />
          </View>
        </View>
        <View className=" ">
          <Text className="mx-5 flex flex-start text-yellow-600 text-xl font-semibold mt-10">
            Running Signals
          </Text>
          <View className="flex flex-row flex-wrap">
            <SignalCards />
            <SignalCards />
            <SignalCards />
          </View>
        </View>
        <View className="p-10"></View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

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
});
