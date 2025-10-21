import React, { useEffect, useRef } from "react";
import { Animated, TouchableOpacity, View } from "react-native";
import CarIcon from "../ui/asetss/CarIcon";
import DolarIcon from "../ui/asetss/DolarIcon";
import HealthIcon from "../ui/asetss/HealthIcon";
import HomeIcon from "../ui/asetss/HomeIcon";
import ShopIcon from "../ui/asetss/ShopIcon";
import TravelIcon from "../ui/asetss/TravelIcon";
import { styles } from "./styles";

type CurtainProps = {
  isOpen: boolean;
};

export function Curtain({ isOpen }: CurtainProps) {
  const top = useRef(new Animated.Value(500)).current;

  useEffect(() => {
    Animated.timing(top, {
      toValue: isOpen ? 0 : 700,
      duration: 400,
      useNativeDriver: false,
    }).start();
  }, [isOpen]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.curtain, { top }]}>
        {[
          <CarIcon key="1" />,
          <ShopIcon key="2" />,
          <DolarIcon key="3" />,
          <HomeIcon key="4" />,
          <TravelIcon key="5" />,
          <HealthIcon key="6" />,
        ].map((Icon, i) => (
          <View style={styles.item} key={i}>
            <TouchableOpacity style={styles.itemButton}>
              {Icon}
            </TouchableOpacity>
          </View>
        ))}
      </Animated.View>
    </View>
  );
}
