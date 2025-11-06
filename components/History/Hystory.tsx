import { Dispatch, SetStateAction } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import CarIcon from "../ui/asetss/CarIcon";
import DolarIcon from "../ui/asetss/DolarIcon";
import HealthIcon from "../ui/asetss/HealthIcon";
import HouseIcon from "../ui/asetss/HouseIcon";
import ShopIcon from "../ui/asetss/ShopIcon";
import TravelIcon from "../ui/asetss/TravelIcon";
import { styles } from "./styles";

type HistoryProps = {
  handleDelete: (indexToDelete: number) => void;
  setHistoryCard: Dispatch<
    SetStateAction<{ amount: number; date: string; category: number | null }[]>
  >;
  historyCard: { amount: number; date: string; category: number | null }[];
};

const categoyItem = [
  CarIcon,
  ShopIcon,
  DolarIcon,
  HouseIcon,
  TravelIcon,
  HealthIcon,
];

export function History({ historyCard, handleDelete }: HistoryProps) {
  return (
    <View style={styles.historyWrapper}>
      <ScrollView
        style={styles.scrollViewHistory}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        {historyCard.map((item, index) => {
          const Icon =
            item.category !== null ? categoyItem[item.category] : null;
          return (
            <View key={index} style={styles.historyCardItem}>
              <Text>
                {index + 1}. {item.amount} грн
              </Text>
              <Text style={{ fontSize: 12, color: "#555" }}>{item.date}</Text>
              {Icon && <Icon width={30} height={30} />}
              <TouchableOpacity
                style={styles.deletBtn}
                onPress={() => handleDelete(index)}
              >
                <Text>Delete</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
