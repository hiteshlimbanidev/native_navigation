import { StyleSheet, Text, View } from "react-native";
import React from "react";
import RestaruntCard from "../Components/RestaruntCard";
import Menu from "../Components/Menu";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../App";

type Props = NativeStackScreenProps<RootStackParams, "ExploreStack">;

const Explore = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.Screentitle}>Restaurants</Text>
      <View>
        <Text style={styles.Sectiontitle}>Restaurants near you</Text>
        <RestaruntCard
          name="burger resturant"
          onPress={() => {
            navigation.push("Resturant", { name: "burger resturants" });
          }}
        />
        <RestaruntCard
          name="sushi Resturant"
          onPress={() => {
            navigation.navigate("ResturantsStack", {
              screen: "Resturant",
              params: { name: "hello from 1" },
            });
          }}
        />
        <RestaruntCard
          name="fine dining resturant"
          onPress={() => {
            navigation.push("Resturant", { name: "fine dining resturants" });
          }}
        />

        <Text style={styles.Sectiontitle}>Most popular resturant</Text>
        <RestaruntCard
          name="chines resturant"
          onPress={() => {
            navigation.push("Resturant", { name: "chines resturants" });
          }}
        />
        <RestaruntCard
          name="thai dining resturant"
          onPress={() => {
            navigation.push("Resturant", { name: "thai dining resturant" });
          }}
        />
      </View>
      <Menu />
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  Sectiontitle: {
    fontSize: 16,
    marginTop: 16,
  },
  Screentitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 8,
  },
});
