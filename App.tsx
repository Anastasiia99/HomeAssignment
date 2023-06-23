import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import WeatherDetailsScreen from "./src/screens/WeatherDetailsScreen";
import { AppStackParamList } from "./src/types";

const Stack = createStackNavigator<AppStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="WeatherDetails"
          component={WeatherDetailsScreen}
          options={{
            headerBackTitleVisible: false,
            headerTitle: "Weather",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
