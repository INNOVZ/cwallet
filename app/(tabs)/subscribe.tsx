import {
  StyleSheet,
  useColorScheme,
  Text,
  SafeAreaView,
  ScrollView,
  View,
} from "react-native";
import SubscribeCard from "react-native-subscribe-card";
import { Button, ButtonGroup, withTheme } from "@rneui/themed";
// import SubscribeCard from "../../components/subscribeCard";

const subscribe = () => {
  const colorScheme = useColorScheme();

  // const themeTextStyle =
  //   colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

  return (
    <SafeAreaView style={[styles.container, themeContainerStyle]}>
      <View className="flex-1 conatiner text-center flex m-5 justify-center items-center ">
        <Text
          className="text-yellow-600 font-normal text-xl"
          style={{ fontFamily: " RalewayBold" }}
        >
          Subsribe Emaletx Premium
        </Text>
        <View className="">
          <Text
            style={{ fontFamily: " RalewayBold" }}
            className="mx-5 text-center text-[#FFFFFF] text-xl font-semibold mt-10"
          >
            Our Plans
          </Text>
          <View className="mt-5 w-9/12">
            <Text
              className="text-[#BCBCBC] text-center text-base"
              style={{ fontFamily: " RalewayBold" }}
            >
              Choose a subscription plan to enjoy our Premium Crypto Signals
            </Text>
          </View>
        </View>
        <View className="flex-1 container items-center justify-center">
          <SubscribeCard
            containerStyle={{
              marginBottom: 15,
              backgroundColor: "#212330",
            }}
            outerContainerStyle={{
              backgroundColor: "#212330",
              marginBottom: 15,
            }}
            title="1 month plan"
            descriptionPrice=""
            description="1 Month of Emaletx Premium"
            descriptionTextStyle={{ color: "#BCBCBC" }}
            currency="$"
            price={10}
            priceTextStyle={{ color: "#F59E0B" }}
            currencyTextStyle={{ color: "#BCBCBC" }}
            timePostfix="/mo"
            onPress={() => {}}
          />
          <SubscribeCard
            style={{
              backgroundColor: "text-yellow-500",
              borderRadius: 15,
            }}
            selectedOuterContainerStyle={{
              backgroundColor: "#F59E0B",
              borderColor: "#F59E0B",
            }}
            isSelected
            title="6 Months"
            descriptionPrice="$ 48"
            description=" Emaletx Premium for 6 months"
            currency="$"
            price={8}
            timePostfix="/mo"
            onPress={() => {}}
            titleTextStyle={{ color: "#212330" }}
            selectedPriceTextStyle={{ color: "#212330" }}
            // selectedCurrencyTextStyle={{ color: "#212330" }}
            selectedDescriptionPriceTextStyle={{ color: "#212330" }}
          />
          <SubscribeCard
            style={{
              backgroundColor: "#212330",
              borderRadius: 15,
            }}
            selectedOuterContainerStyle={{
              backgroundColor: "#F59E0B",
              borderColor: "#F59E0B",
            }}
            discountText="Save Life"
            discountContainerStyle={{ backgroundColor: "#F59E0B" }}
            discountTextStyle={{ color: "#212330" }}
            outerContainerStyle={{ backgroundColor: "#F59E0B" }}
            title="Lifetime plan"
            currency="$"
            price={500}
            timePostfix="/life"
            isSelected
            selectedPriceTextStyle={{ color: "#F59E0B" }}
            selectedCurrencyTextStyle={{ color: "#BCBCBC" }}
            onPress={() => {}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default subscribe;

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
