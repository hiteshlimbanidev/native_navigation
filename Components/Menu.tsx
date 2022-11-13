import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const Menu = () => {
  return (
    <View style={styles.container}>
      <Text>Navigation</Text>
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.links}>Explore</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.links}>Restaurant</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.links}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#efefef",
    padding: 16,
    marginTop: 10,
  },
  links: {
    fontSize: 16,
    marginTop: 4,
    color: "#097ade",
  },
});

export default Menu;
