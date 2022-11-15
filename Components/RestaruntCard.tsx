import React from "react";
import { Text, View, StyleSheet } from "react-native";

interface Props {
  name: String;
  onPress: (name: string) => void;
}

const RestaruntCard: React.FC<Props> = ({ name, onPress }) => {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e0e0e0",
    padding: 16,
    marginTop: 8,
    borderRadius:10
  },
});

export default RestaruntCard;
