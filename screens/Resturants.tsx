import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import RestaruntCard from "../Components/RestaruntCard";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../AppTabNavigator";
import TopDrawerNavigation from "../Components/TopDrawerNavigation";

type Props = NativeStackScreenProps<RootStackParams, "ResturantsStack">;

const ResturantsScreen = ({ navigation }: Props) => {
  return (
    <>
      <View style={styles.container}>
        <TopDrawerNavigation />

        <ScrollView>
          <Text style={styles.screenTitle}>Resturants Screen</Text>
          <RestaruntCard
            name="Sushi resturant"
            onPress={(name) => {
              navigation.navigate("Resturant", { name });
            }}
          />
          <RestaruntCard
            name="Burger resturant"
            onPress={(name) => {
              navigation.navigate("Resturant", { name });
            }}
          />
          <RestaruntCard
            name="Pizza resturant"
            onPress={(name) => {
              navigation.navigate("Resturant", { name });
            }}
          />
          <RestaruntCard
            name="Panjabi resturant"
            onPress={(name) => {
              navigation.navigate("Resturant", { name });
            }}
          />
          <RestaruntCard
            name="Gujrati resturant"
            onPress={(name) => {
              navigation.navigate("Resturant", { name });
            }}
          />
          <RestaruntCard
            name="South indian resturant"
            onPress={(name) => {
              navigation.navigate("Resturant", { name });
            }}
          />
        </ScrollView>
      </View>
    </>
  );
};

export default ResturantsScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  screenTitle: {
    fontSize: 24,
    marginTop: 8,
    fontWeight: "bold",
  },
});
