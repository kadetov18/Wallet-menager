import { Action } from "@/components/Action/Action";
import { Balance } from "@/components/Balance/Balance";
import { Curtain } from "@/components/Curtain/Curtain";
import { Header } from "@/components/Header/Header";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function HomeScrun() {
  const [balance, setBalance] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [isCurtainOpen, setIsCurtainOpen] = useState(false);

  const toggleCurtain = () => setIsCurtainOpen((prev) => !prev);
  const resetBalance = () => setBalance(0);
  const handleButtonPress = () => {
    setInputValue("-");
    toggleCurtain();
  };
  const handleUpdateBalance = () => {
    const numberValue = parseFloat(inputValue);
    console.log(typeof numberValue);
    if (!isNaN(numberValue)) {
      setBalance((prevBalance) => prevBalance + numberValue);
      setInputValue("");
    } else {
      alert("aaa");
      toggleCurtain();
    }
  };

  return (
    <View style={styles.container}>
      <Header res={resetBalance} />
      <Balance balance={balance} />
      <Action toggle={toggleCurtain} handleButtonPress={handleButtonPress} />
      <Curtain
        handleUpdateBalance={handleUpdateBalance}
        inputValue={inputValue}
        setInputValue={setInputValue}
        isOpen={isCurtainOpen}
        toggle={toggleCurtain}
      />
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
