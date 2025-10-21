import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type CountProps = {
  decrement: () => void;
  toggle: () => void;
};

export function Action({ decrement, toggle }: CountProps) {
  return (
    <View>
      <View style={styles.action}>
        <Text style={styles.actionText}>HISTORY</Text>
        <TouchableOpacity style={styles.actionButton} onPress={toggle}>
          <Text style={styles.actionButtonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={toggle}>
          <Text style={styles.actionButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
