import { createStackNavigator } from "@react-navigation/stack";
import { MovieDescription } from "../components/MovieDescription";
import { Trend } from "../components/Trend";

const Stack = createStackNavigator();

export function TrendScreen() {
  return (
    <Stack.Navigator initialRouteName="Trend">
      <>
        <Stack.Screen
          name="Trend"
          component={Trend}
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
          component={MovieDescription}
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
      </>
    </Stack.Navigator>
  );
}
