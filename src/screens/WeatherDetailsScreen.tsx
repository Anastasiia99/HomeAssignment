import { FC, useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import Layout from "../components/Layout";
import { AppStackParamList, Weather } from "../types";

import WeatherCard from "../components/WeatherCard";
import WeatherDetailsCard from "../components/WeatherDetailsCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SaveButton from "../components/SaveButton";

type Props = StackScreenProps<AppStackParamList, "WeatherDetails">;

const WeatherDetailsScreen: FC<Props> = ({ route, navigation }) => {
  const {
    coordinates: { lat, lon },
    city,
  } = route.params;
  const [weather, setWeather] = useState<Weather | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [isSaved, setIsSaved] = useState<boolean>(false);

  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ac2d73cc41ed66778dc378af4bfe47cf`
      );
      const data: Weather = await response.json();

      setWeather(data);
    } catch (error) {
      console.error("Error fetching weather results:", error);
      setError(true);
    }
  };

  const checkIfSaved = async () => {
    const value = await AsyncStorage.getItem("saved-city");
    if (value === city) {
      setIsSaved(true);
    }
  };

  useEffect(() => {
    checkIfSaved();
    fetchWeather();
  }, []);

  const handleSavePress = async () => {
    if (isSaved) {
      await AsyncStorage.removeItem("saved-city");
      setIsSaved(false);
    } else {
      await AsyncStorage.setItem("saved-city", city);
      setIsSaved(true);
    }
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <SaveButton onPress={handleSavePress} isSaved={isSaved} />
      ),
    });
  }, [isSaved]);

  return (
    <Layout>
      {error ? (
        <Text style={styles.errorText}>Unable to get wether details</Text>
      ) : weather ? (
        <>
          <WeatherCard weather={weather} city={city} />
          <WeatherDetailsCard weather={weather} />
        </>
      ) : null}
    </Layout>
  );
};

const styles = StyleSheet.create({
  errorText: { color: "red" },
});

export default WeatherDetailsScreen;
