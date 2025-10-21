import { Text, View } from "react-native";
import { styles } from "./styles";

type CardProps = {
  balance: number;
};

export function Balance({ balance }: CardProps) {
  return (
    <View style={styles.wallet}>
      <Text style={styles.balance}>{balance.toFixed(2)}</Text>
    </View>
  );
}
