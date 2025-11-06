import { Action } from "@/components/Action/Action";
import { Balance } from "@/components/Balance/Balance";
import { Curtain } from "@/components/Curtain/Curtain";
import { Header } from "@/components/Header/Header";
import { History } from "@/components/History/Hystory";
import { useBalance } from "@/components/hooks/useBalance";
import { useCurtain } from "@/components/hooks/useCurtain";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function HomeScrun() {
  const {
    balance,
    inputValue,
    setInputValue,
    handleUpdateBalance,
    setBalance,
    setHistoryCard,
    historyCard,
    selectedIndex,
    setSelectedIndex,
  } = useBalance();

  const handleDelete = (indexToDelete: number) => {
    setHistoryCard((prev) => prev.filter((_, i) => i !== indexToDelete));
  };

  const { isCurtainOpen, toggleCurtain, resetBalance, handleButtonPress } =
    useCurtain({ setInputValue, setBalance });

  return (
    <View style={styles.container}>
      <Header res={resetBalance} />
      <Balance balance={balance} />

      <Action handleButtonPress={handleButtonPress} />
      <Curtain
        handleUpdateBalance={handleUpdateBalance}
        inputValue={inputValue}
        setInputValue={setInputValue}
        isOpen={isCurtainOpen}
        toggle={toggleCurtain}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <History
        setHistoryCard={setHistoryCard}
        historyCard={historyCard}
        handleDelete={handleDelete}
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
  scrol: {
    height: 1,
  },
});
