import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { LineChart } from "react-native-chart-kit";

const Chart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

  return (
    <LineChart
      data={data}
      width={Dimensions.get("window").width - 65}
      height={200}
      chartConfig={{
        backgroundColor: "#ffffff",
        backgroundGradientFrom: "rgba(225, 225, 225, 0.65)",
        backgroundGradientTo: "rgba(225, 225, 225, 0.65)",
        decimalPlaces: 2,
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        style: {
          borderRadius: 16,
        },
      }}
      bezier
      style={{
        marginVertical: 8,
        borderRadius: 16,
      }}
    />
  );
};

export default Chart;
