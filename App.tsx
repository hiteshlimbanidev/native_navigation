import {
  NavigationContainer,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import Explore from "./screens/Explore";
import Profile from "./screens/Profile";
import RestaurantScreen from "../nativeroute/screens/Resturant";
import ResturantsScreen from "./screens/Resturants";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RestaurantIcon from "./icons/RestaurantIcon";
import ExploreIcon from "./icons/ExploreIcon";
import ProfileIcon from "./icons/ProfileIcon";
import { createDrawerNavigator } from "@react-navigation/drawer";

export type RootStackParams = {
  ExploreStack: undefined;
  ResturantsStack: NavigatorScreenParams<RestaurantsStackParam>;
  Profile: undefined;
  Resturant: {
    name: string;
  };
};

export type RestaurantsStackParam = {
  Restaurants: undefined;
  Resturant: {
    name: string;
  };
};

const RootStack = createDrawerNavigator<RootStackParams>();

const RestaurantsStack = createNativeStackNavigator<RestaurantsStackParam>();

const ResturantsStackScreen = () => {
  return (
    <RestaurantsStack.Navigator
      initialRouteName="Restaurants"
      screenOptions={{ headerShown: false }}
    >
      <RestaurantsStack.Screen
        name="Restaurants"
        component={ResturantsScreen}
      />
      <RestaurantsStack.Screen name="Resturant" component={RestaurantScreen} />
    </RestaurantsStack.Navigator>
  );
};

export type ExploreStackParam = {
  Explore: undefined;
  Resturant: {
    name: string;
  };
};

const ExploreStack = createNativeStackNavigator<ExploreStackParam>();

const ExploreStackScreen = () => {
  return (
    <ExploreStack.Navigator
      initialRouteName="Explore"
      screenOptions={{ headerShown: false }}
    >
      <ExploreStack.Screen name="Explore" component={Explore} />
      <ExploreStack.Screen name="Resturant" component={RestaurantScreen} />
    </ExploreStack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="ExploreStack"
        screenOptions={{
          headerShown: false,
          drawerActiveTintColor: "#e67a54",
          drawerInactiveTintColor: "gray",
        }}
      >
        <RootStack.Screen
          name="ExploreStack"
          component={ExploreStackScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <ExploreIcon color={color} size={size} />
            ),
            drawerLabel: "Explore",
          }}
        />
        <RootStack.Screen
          name="ResturantsStack"
          component={ResturantsStackScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <RestaurantIcon color={color} size={size} />
            ),
            drawerLabel: "Resturants",
          }}
        />
        <RootStack.Screen
          name="Profile"
          component={Profile}
          options={{
            drawerIcon: ({ color, size }) => (
              <ProfileIcon color={color} size={size} />
            ),
            drawerLabel: "Profile",
          }}
        />
        {/* <RootStack.Screen name="Resturant" component={RestaurantScreen} /> */}
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
