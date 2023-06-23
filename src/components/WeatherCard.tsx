import { FC } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Weather } from "../types";
import { temperatureToCelcius } from "../helpers";

interface Props {
  weather: Weather;
  city: string;
}

const WeatherCard: FC<Props> = ({ weather, city }) => {
  return (
    <View style={styles.container} testID="WeatherCard">
      <Text style={styles.cityText}>{city}</Text>
      <View style={styles.temperatureContainer}>
        <Text style={styles.temperature}>{`${temperatureToCelcius(
          weather.main.temp
        )}°C`}</Text>
        <Image
          testID="WeatherImage"
          source={{
            uri: `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`,
          }}
          style={styles.image}
        />
      </View>
      <Text style={styles.descriptionText}>
        {weather.weather[0].description}
      </Text>
      <Text style={styles.tempRange}>{`L:${temperatureToCelcius(
        weather.main.temp_min
      )}°  H:${temperatureToCelcius(weather.main.temp_max)}°`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3,
    elevation: 4,
  },
  temperatureContainer: {
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  cityText: {
    fontWeight: "bold",
    fontSize: 26,
  },
  temperature: {
    fontWeight: "bold",
    fontSize: 50,
  },
  image: { width: "30%", height: "100%", marginLeft: 20 },
  descriptionText: {
    fontSize: 15,
    color: "#949494",
  },
  tempRange: {
    fontSize: 20,
    color: "#949494",
  },
});

export default WeatherCard;
