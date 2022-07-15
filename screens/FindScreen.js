import { createStackNavigator } from "@react-navigation/stack";
import { Find } from "../components/Find";
import { MovieDescription } from "../components/MovieDescription";

const Stack = createStackNavigator();

export function FindScreen() {
  return (
    <Stack.Navigator initialRouteName="Trend">
      <>
        <Stack.Screen
          name="Find"
          component={Find}
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
