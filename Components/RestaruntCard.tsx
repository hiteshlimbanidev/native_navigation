import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

interface Props {
  name: string;
  onPress: (name: string) => void;
}

const RestaruntCard: React.FC<Props> = ({ name, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(name)}>
      <View style={styles.container}>
        <Text>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e0e0e0",
    padding: 16,
    marginTop: 8,
    borderRadius: 10,
  },
});

export default RestaruntCard;
