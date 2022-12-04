import { View, StyleSheet, TouchableHighlightBase } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import BackIcon from "../icons/BackIcon";
import { TouchableHighlight } from "react-native-gesture-handler";

const TopBackNavigation = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.backButton}
        underlayColor="#f0ddcc"
        onPress={() => {
          navigation.goBack();
        }}
      >
        <BackIcon color="#333" size={20} />
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  backButton: {
    borderRadius: 8,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default TopBackNavigation;
