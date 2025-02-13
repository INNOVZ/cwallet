import React from "react";
import { StyleSheet, View } from "react-native";
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryTooltip,
} from "victory-native";

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 19500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 12000 },
];

export default function App() {
  return (
    <View style={styles.container}>
      <VictoryBar
        labelComponent={
          <VictoryTooltip
            flyoutWidth={95}
            flyoutHeight={35}
            cornerRadius={5}
            pointerLength={40}
            flyoutStyle={{
              stroke: "#868C97",
              strokeWidth: 2,
              fill: "#FFFFFF",
            }}
            style={{
              fill: "#868C97",
              fontSize: 10,
              fontWeight: 500,
              textAnchor: "middle",
            }}
          />
        }
        data={data}
        x="quarter"
        y="earnings"
        theme={VictoryTheme.clean}
        barRatio={1}
        animate={{ duration: 250 }}
        style={{
          data: {
            fill: "rgb(209, 209, 209)",
            fillOpacity: 0.8,
            strokeWidth: 2,
          },
          labels: {
            fontSize: 12,
            fill: "#c43a31",
          },
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderColor: "rgba(209, 209, 209, 0.15)",
  },
});
