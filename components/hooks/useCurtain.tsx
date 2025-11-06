import { Dispatch, SetStateAction, useState } from "react";

type UseCurtainProps = {
  setInputValue: Dispatch<SetStateAction<string>>;
  setBalance: Dispatch<SetStateAction<number>>;
};

export function useCurtain({ setInputValue, setBalance }: UseCurtainProps) {
  const [isCurtainOpen, setIsCurtainOpen] = useState(false);

  const toggleCurtain = () => setIsCurtainOpen((prev) => !prev);
  const resetBalance = () => {
    setBalance(0);
  };

  const handleButtonPress = (sing: string) => {
    setInputValue(sing);
    if (!isCurtainOpen) toggleCurtain();
  };

  return {
    isCurtainOpen,
    toggleCurtain,
    resetBalance,
    handleButtonPress,
  };
}
