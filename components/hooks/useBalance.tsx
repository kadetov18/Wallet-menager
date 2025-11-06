import { useState } from "react";

export function useBalance() {
  const [balance, setBalance] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>("");
  const [historyCard, setHistoryCard] = useState<
    { amount: number; date: string; category: number | null }[]
  >([]);

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleUpdateBalance = () => {
    const numberValue = parseFloat(inputValue);

    if (!isNaN(numberValue)) {
      setBalance((prevBalance) => prevBalance + numberValue);
      setHistoryCard((prev) => [
        {
          amount: numberValue,
          date: new Date().toLocaleString(),
          category: selectedIndex,
        },
        ...prev,
      ]);
      setInputValue("");
    } else {
      alert("Pleas enter number");
      setInputValue("");
    }
  };
  return {
    balance,
    inputValue,
    setInputValue,
    handleUpdateBalance,
    setBalance,
    setHistoryCard,
    historyCard,
    selectedIndex,
    setSelectedIndex,
  };
}
