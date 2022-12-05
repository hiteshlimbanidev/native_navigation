import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TopDrawerNavigation from "../Components/TopDrawerNavigation";

const Profile = () => {
  return (
    <View style={styles.container}>
      <TopDrawerNavigation />
      <Text style={styles.Screentitle}>Profile</Text>
    </View>
  );
};

export default Profile;

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
