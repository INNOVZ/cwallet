import React, { useState } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { CardData } from "../data/CardData";
import { Icon } from "@rneui/themed";

const SelectCard = () => {
  const [selectedValue, setSelectedValue] = useState("USD");

  const renderContent = () => {
    const currencyInfo = CardData[selectedValue];

    return (
      <View style={styles.currencyInfo}>
        <View style={styles.headerSection}>
          <Text style={styles.info}>Balance</Text>
          <Text style={styles.pageTitle}>
            {currencyInfo.symbol} {currencyInfo.balance}
          </Text>
        </View>

        {/* <View style={styles.rateSection}>
          <Text style={styles.rateText}>
            Rate: {currencyInfo.symbol}
            {currencyInfo.rate.toFixed(2)}
          </Text>
        </View> */}

        <View className="flex flex-row justify-between items-center">
          <View className="flex">
            <Text
              style={{ fontFamily: "RalewayRegular" }}
              className="text-gray-500 text-center text-base"
            >
              Account Number
            </Text>
            <Text
              style={{ fontFamily: "RalewayBold" }}
              className="text-black text-center text-base"
            >
              **** 0068 9934
            </Text>
          </View>

          <View>
            <Text
              style={{ fontFamily: "RalewayRegular" }}
              className="text-gray-500 text-center text-base"
            >
              Valid Date
            </Text>
            <Text
              style={{ fontFamily: "RalewayBold" }}
              className="text-black text-center text-base"
            >
              {currencyInfo.date}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>
      <View style={styles.container}>
        {/* Dropdown */}
        <View style={styles.pickerContainer}>
          {Platform.OS === "ios" ? (
            <Picker
              selectedValue={selectedValue}
              onValueChange={(itemValue) => setSelectedValue(itemValue)}
              style={[styles.picker, styles.iosPicker]}
              itemStyle={styles.iosPickerItem}
              mode="dropdown"
            >
              {Object.keys(CardData).map((currency) => (
                <Picker.Item key={currency} label={currency} value={currency} />
              ))}
            </Picker>
          ) : (
            <Picker
              selectedValue={selectedValue}
              onValueChange={(itemValue) => setSelectedValue(itemValue)}
              style={styles.picker}
              dropdownIconColor="white"
              mode="dropdown"
            >
              {Object.keys(CardData).map((currency) => (
                <Picker.Item key={currency} label={currency} value={currency} />
              ))}
            </Picker>
          )}
          <View style={styles.arrowContainer}>
            <Icon
              type="MaterialIcons"
              size={30}
              name="keyboard-arrow-down"
              color={"#FFFFFF"}
            />
          </View>
        </View>

        {/* Content based on selection */}
        <View style={styles.contentContainer}>{renderContent()}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  pickerContainer: {
    marginBottom: 20,
    borderRadius: 50,
    overflow: "hidden",
    width: "35%",
    backgroundColor: "black",
    ...Platform.select({
      ios: {
        paddingVertical: 8,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  picker: {
    color: "white",
    height: 40,
  },
  iosPicker: {
    // borderRadius: 50,
    // backgroundColor: "black",
  },
  iosPickerItem: {
    color: "white",
    fontWeight: "700",
    fontSize: 13,
    height: 40,
  },
  contentContainer: {
    marginTop: 5,
  },
  currencyInfo: {
    gap: 20,
  },
  headerSection: {
    gap: 4,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: "light",
    color: "black",
  },
  info: {
    fontSize: 16,
    color: "#B0B0B0",
  },
  rateSection: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: 12,
    borderRadius: 8,
  },
  rateText: {
    fontSize: 18,
    color: "white",
    fontWeight: "600",
  },
  statsSection: {
    gap: 12,
  },
  statItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255, 0.1)",
  },
  statLabel: {
    color: "#B0B0B0",
    fontSize: 14,
  },
  statValue: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },
  arrowContainer: {
    position: "absolute",
    paddingLeft: 8,
    right: 12,
    top: "28%",
    width: "auto",
    // transform: [{ translateY: -15 }], // Adjust this value to center the arrow
    pointerEvents: "none", // Makes sure the arrow doesn't interfere with picker touches
  },
  arrow: {
    color: "white",
    fontSize: 15,
  },
});

export default SelectCard;
