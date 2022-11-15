import { StyleSheet, Text, View } from "react-native";
import React from "react";
import RestaruntCard from "../Components/RestaruntCard";
import Menu from "../Components/Menu";

const Explore = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.Screentitle}>Restaurants</Text>
      <View>
        <Text style={styles.Sectiontitle}>Restaurants near you</Text>
        <RestaruntCard name="burger resturant" onPress={() => {}} />
        <RestaruntCard name="sushi Resturant" onPress={() => {}} />
        <RestaruntCard name="fine dining resturant" onPress={() => {}} />

        <Text style={styles.Sectiontitle}>Most popular resturant</Text>
        <RestaruntCard name="chines resturant" onPress={() => {}} />
        <RestaruntCard name="thai dining resturant" onPress={() => {}} />
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
