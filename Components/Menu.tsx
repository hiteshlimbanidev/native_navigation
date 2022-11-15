import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../App";
const Menu = () => {
  const navigation =
    useNavigation<StackNavigationProp<RootStackParams>>();
  return (
    <View style={styles.container}>
      <Text>Navigation</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Explore");
        }}
      >
        <Text style={styles.links}>Explore</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Resturants");
        }}
      >
        <Text style={styles.links}>Restaurant</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Profile");
        }}
      >
        <Text style={styles.links}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e0e0e0",
    padding: 16,
    marginTop: 10,
    borderRadius: 10,
  },
  links: {
    fontSize: 16,
    marginTop: 4,
    color: "#097ade",
  },
});

export default Menu;
