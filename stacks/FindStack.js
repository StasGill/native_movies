import { createStackNavigator } from "@react-navigation/stack";
import { FindScreen } from "../screens/FindScreen";
import { MovieDescriptionScreen } from "../screens/MovieDescriptionScreen";

const Stack = createStackNavigator();

export function FindStack() {
  return (
    <Stack.Navigator initialRouteName="Trend">
      <>
        <Stack.Screen
          name="Find"
          component={FindScreen}
          options={{
            title: "Find",
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
          name="FindItem"
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
      </>
    </Stack.Navigator>
  );
}
