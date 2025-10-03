import { Action } from "@/components/Action/Action";
import { Balane } from "@/components/Balance/Balance";
import { Header } from "@/components/Header/Header";
import { StyleSheet, View } from "react-native";

export default function HomeScrun() {
  return (
    <View style={styles.container}>
      <Header />
      <Balane />
      <Action />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f0f0ff",
    padding: 16,
  },
});
