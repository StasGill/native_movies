import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icons } from "./components/Icons";
import { FindStack } from "./stacks/FindStack";
import { TrendStack } from "./stacks/TrendStack";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Trend Today") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            } else if (route.name === "Find Movie") {
              iconName = focused ? "ios-list-box" : "ios-list";
            }

            return <Icons color={color} type={route.name} />;
          },
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
          tabBarStyle: {
            height: 80,
            paddingHorizontal: 5,
            paddingTop: 10,
            paddingBottom: 20,
            backgroundColor: "rgba(34,36,40,1)",
            position: "absolute",
            borderTopWidth: 0,
          },
        })}
      >
        <Tab.Screen name="Trend Today" component={TrendStack} />
        <Tab.Screen name="Find Movie" component={FindStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
