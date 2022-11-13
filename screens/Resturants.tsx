import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import RestaruntCard from "../Components/RestaruntCard";
import Menu from "../Components/Menu";

const ResturantsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Resturants Screen</Text>
      <ScrollView>
        {/* <RestaruntCard name="Sushi resturant" onPress={() => {}}/>
        <RestaruntCard name="Burger resturant" onPress={() => {}}/>
        <RestaruntCard name="Pizza resturant" onPress={() => {}}/>
        <RestaruntCard name="Panjabi resturant" onPress={() => {}}/>
        <RestaruntCard name="Gujrati resturant" onPress={() => {}}/>
        <RestaruntCard name="South indian resturant" onPress={() => {}}/> */}
      </ScrollView>
      <Menu />
    </View>
  );
};

export default ResturantsScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 24,
  },
  screenTitle: {
    fontSize: 24,
    marginTop: 8,
    fontWeight: "bold",
  },
});
