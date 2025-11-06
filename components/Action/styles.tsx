import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  action: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  actionText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  actionButton: {
    width: 80,
    height: 40,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  actionButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
