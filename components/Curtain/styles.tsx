import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    position: "relative", // рух шторки відносно цього контейнера
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  curtain: {
    position: "absolute", // рухаємо тільки цю шторку
    width: "100%", // ширина шторки
    backgroundColor: "#ddd",
    borderRadius: 12,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "flex-start",
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
});
