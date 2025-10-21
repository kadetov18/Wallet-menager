import { Action } from "@/components/Action/Action";
import { Balance } from "@/components/Balance/Balance";
import { Curtain } from "@/components/Curtain/Curtain";
import { Header } from "@/components/Header/Header";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function HomeScrun() {
  const [balance, setBalance] = useState(0);
  const [isCurtainOpen, setIsCurtainOpen] = useState(false);

  const toggleCurtain = () => setIsCurtainOpen((prev) => !prev);
  const deCreaseBalance = () => setBalance((prev) => prev - 1);
  const resetBalance = () => setBalance(0);

  return (
    <View style={styles.container}>
      <Header res={resetBalance} />
      <Balance balance={balance} />
      <Action decrement={deCreaseBalance} toggle={toggleCurtain} />
      <Curtain isOpen={isCurtainOpen} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f0f0",
    padding: 16,
  },
});
