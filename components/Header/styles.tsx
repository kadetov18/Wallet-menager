import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    marginVertical: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  page: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  burgerMenu: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  logoButton: {
    width: 80, // ширина кнопки
    height: 40, // висота кнопки
    backgroundColor: "#ddd",
    justifyContent: "center", // вирівнює по вертикалі
    alignItems: "center", // вирівнює по горизонталі
    borderRadius: 8,
  },

  burgerButtonMenu: {
    width: 80, // ширина кнопки
    height: 40, // висота кнопки
    backgroundColor: "#ddd",
    justifyContent: "center", // вирівнює по вертикалі
    alignItems: "center", // вирівнює по горизонталі
    borderRadius: 8,
  },
});
