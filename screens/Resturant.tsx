import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../App";
import RestaruntCard from "../Components/RestaruntCard";

type Props = NativeStackScreenProps<RootStackParams, "Resturant">;

const RestaurantScreen = ({ route, navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.Screentitle}>{route.params.name}</Text>

      <Text>Related Restaurants</Text>
      <RestaruntCard
        name="Sushi 1"
        onPress={() => {
          navigation.push("Resturant", { name: "Sushi 1" });
        }}
      />
      <RestaruntCard
        name="Sushi 2"
        onPress={() => {
          navigation.push("Resturant", { name: "Sushi 2" });
        }}
      />
      <RestaruntCard
        name="Sushi 3"
        onPress={() => {
          navigation.push("Resturant", { name: "Sushi 3" });
        }}
      />
    </View>
  );
};
export default RestaurantScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },

  Screentitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 8,
  },
});
