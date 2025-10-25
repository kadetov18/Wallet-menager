import React, { useEffect, useRef } from "react";
import {
  Animated,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import CarIcon from "../ui/asetss/CarIcon";
import DolarIcon from "../ui/asetss/DolarIcon";
import HealthIcon from "../ui/asetss/HealthIcon";
import HouseIcon from "../ui/asetss/HouseIcon";
import ShopIcon from "../ui/asetss/ShopIcon";
import TravelIcon from "../ui/asetss/TravelIcon";
import { styles } from "./styles";

type CurtainProps = {
  isOpen: boolean;
  toggle: () => void;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  handleUpdateBalance: any;
};

export function Curtain({
  isOpen,
  toggle,
  inputValue,
  setInputValue,
  handleUpdateBalance,
}: CurtainProps) {
  const top = useRef(new Animated.Value(700)).current;

  useEffect(() => {
    Animated.timing(top, {
      toValue: isOpen ? 0 : 700,
      duration: 400,
      useNativeDriver: false,
    }).start();
  }, [isOpen, top]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.curtain, { top }]}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            value={inputValue}
            onChangeText={(text) => setInputValue(text)}
            placeholder="Enter the amount"
          />
          <TouchableOpacity
            style={styles.returnButton}
            onPress={handleUpdateBalance}
          >
            <Text>Enter</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.scrollView}>
          <View style={styles.iconsWrapper}>
            {[
              CarIcon,
              ShopIcon,
              DolarIcon,
              HouseIcon,
              TravelIcon,
              HealthIcon,
            ].map((Icon, i) => (
              <View style={styles.item} key={i}>
                <TouchableOpacity style={styles.itemButton}>
                  <Icon width={50} height={50} />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </ScrollView>
      </Animated.View>
    </View>
  );
}
