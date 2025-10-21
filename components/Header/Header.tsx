import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type resProps = {
  res: () => void;
};
export function Header({ res }: resProps) {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.logoButton} onPress={res}>
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
