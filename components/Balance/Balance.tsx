import { Text, View } from "react-native";
import { styles } from "./styles";

export function Balane() {
  return (
    <View style={styles.wallet}>
      <Text style={styles.balance}>1000,00</Text>
    </View>
  );
}
