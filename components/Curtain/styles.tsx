import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  curtain: {
    position: "absolute",
    width: "100%",
    backgroundColor: "#ddd",
    borderRadius: 12,
    flexDirection: "column",
    padding: 10,
  },
  item: {
    width: "30%",
    height: 80,
    backgroundColor: "rgba(244, 240, 240, 1)",
    borderRadius: 8,
    marginBottom: 10,
  },
  itemButton: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  inputWrapper: {
    width: "100%",
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    width: "55%",
    fontSize: 17,
    fontWeight: "bold",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#fff",
  },
  iconsWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 10,
  },
  returnButton: {
    width: 80,
    height: 40,
    backgroundColor: "rgba(244, 240, 240, 1)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  scrollView: {
    height: 180,
  },
});
