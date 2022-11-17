import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import Explore from "./screens/Explore";
import Profile from "./screens/Profile";
import ResturantScreen from "./screens/resturant";
import ResturantsScreen from "./screens/Resturants";

export type RootStackParams = {
  Explore: any;
  Resturants: any;
  Profile: any;
  Resturant: {
    name: string;
  };
};

const RootStack = createNativeStackNavigator<RootStackParams>();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Explore">
        <RootStack.Screen name="Resturants" component={ResturantsScreen} />
        <RootStack.Screen name="Explore" component={Explore} />
        <RootStack.Screen name="Profile" component={Profile} />
        <RootStack.Screen name="Resturant" component={ResturantScreen} />
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
