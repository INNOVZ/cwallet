import { StyleSheet, useColorScheme, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
export default function Modal() {
  const { id, title, description } = useLocalSearchParams();
  const colorScheme = useColorScheme();

  // const themeTextStyle =
  //   colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

  return (
    <View style={[styles.container, themeContainerStyle]} className="px-5 py-5">
      <Text
        className="text-yellow-500 font-normal text-xl"
        style={{ fontFamily: "QuickSandBold" }}
      >
        {title}
      </Text>
      <Text
        className="text-[#FFAC30] font-normal text-xl"
        style={{ fontFamily: "QuickSandBold" }}
      >
        {description}
      </Text>
    </View>
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
