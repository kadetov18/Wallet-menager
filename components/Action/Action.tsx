import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function Action() {
  return (
    <View style={styles.action}>
      <Text style={styles.actionText}>HISTORY</Text>
      <TouchableOpacity onPress={() => console.log("Creating a wallet action")}>
        <Text>+</Text>
      </TouchableOpacity>
    </View>
  );
}
