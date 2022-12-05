import {
  NavigationContainer,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import Explore from "./screens/Explore";
import Profile from "./screens/Profile";
import RestaurantScreen from "./screens/Resturant";
import ResturantsScreen from "./screens/Resturants";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RestaurantIcon from "./icons/RestaurantIcon";
import ExploreIcon from "./icons/ExploreIcon";
import ProfileIcon from "./icons/ProfileIcon";

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

const RootStack = createBottomTabNavigator<RootStackParams>();

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
          tabBarActiveTintColor: "#e67a54",
          tabBarInactiveTintColor: "gray",
        }}
      >
        <RootStack.Screen
          name="ExploreStack"
          component={ExploreStackScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <ExploreIcon color={color} size={size} />
            ),
            tabBarLabel: "Explore",
          }}
        />
        <RootStack.Screen
          name="ResturantsStack"
          component={ResturantsStackScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <RestaurantIcon color={color} size={size} />
            ),
            tabBarLabel: "Resturants",
          }}
        />
        <RootStack.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ color, size }) => (
              <ProfileIcon color={color} size={size} />
            ),
            tabBarLabel: "Profile",
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
