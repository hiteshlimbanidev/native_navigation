import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";
import Explore from "./screens/Explore";
import Profile from "./screens/Profile";
import ResturantsScreen from "./screens/Resturants";

export type RootStackParams = {
  Explore;
  Resturants;
  Profile;
};

const RootStack = createStackNavigator<RootStackParams>();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Explore">
        <RootStack.Screen name="Resturants" component={ResturantsScreen} />
        <RootStack.Screen name="Explore" component={Explore} />
        <RootStack.Screen name="Profile" component={Profile} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
