import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Screen01 from "./Screen01";
import Screen02 from "./Screen02";

export default function App() {
  return <Screen01></Screen01>;
  // return <Screen02></Screen02>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
