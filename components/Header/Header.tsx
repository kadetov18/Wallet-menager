import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function Header() {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.logoButton}
        onPress={() => console.log("Logo pressed")}
      >
        <Text style={styles.logo}>LOGO</Text>
      </TouchableOpacity>
      <Text style={styles.page}>Wallet</Text>
      <TouchableOpacity
        style={styles.burgerButtonMenu}
        onPress={() => console.log("Burger menu pressed")}
      >
        <Text style={styles.burgerMenu}>Menu</Text>
      </TouchableOpacity>
    </View>
  );
}
