import { createStackNavigator } from "@react-navigation/stack";
import { CastDescriptionScreen } from "../screens/CastDescriptionScreen";
import { MovieDescriptionScreen } from "../screens/MovieDescriptionScreen";
import { TrendScreen } from "../screens/TrendScreen";

const Stack = createStackNavigator();

export function TrendStack() {
  return (
    <Stack.Navigator initialRouteName="Trend">
      <>
        <Stack.Screen
          name="Trend"
          component={TrendScreen}
          options={{
            title: "Trend",
            headerStyle: {
              backgroundColor: "rgba(34,36,40,1)",
              height: 82,
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="MovieItem"
          component={MovieDescriptionScreen}
          options={{
            title: "Description",
            headerStyle: {
              backgroundColor: "rgba(34,36,40,1)",
              height: 82,
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="CastItem"
          component={CastDescriptionScreen}
          options={{
            title: "Cast",
            headerStyle: {
              backgroundColor: "rgba(34,36,40,1)",
              height: 82,
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </>
    </Stack.Navigator>
  );
}
