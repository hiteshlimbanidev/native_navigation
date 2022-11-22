import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../App";

type Props = NativeStackScreenProps<RootStackParams, "Resturant">;

const RestaurantScreen = ({ route }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.Screentitle}>{route.params.name}</Text>
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
    fontWeight: 'bold',
    marginTop: 8,
  },
});
