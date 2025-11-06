import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  historyWrapper: {
    paddingVertical: 25,
    height: 350,
  },
  scrollViewHistory: {},

  historyCardWrapper: {},
  historyCardItem: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#ddd",
    height: 65,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  deletBtn: {
    width: 50,
    height: 35,
    backgroundColor: "rgba(244, 240, 240, 1)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
});
