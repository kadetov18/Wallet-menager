import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type CountProps = {
  toggle: () => void;
  handleButtonPress: () => void;
};

export function Action({ toggle, handleButtonPress }: CountProps) {
  return (
    <View>
      <View style={styles.action}>
        <Text style={styles.actionText}>HISTORY</Text>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={handleButtonPress}
        >
          <Text style={styles.actionButtonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={toggle}>
          <Text style={styles.actionButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
