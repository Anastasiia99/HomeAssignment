import { FC } from "react";
import { StyleSheet, View } from "react-native";
import { Weather } from "../types";
import { convertTime, temperatureToCelcius } from "../helpers";
import WeatherDetailsItem from "./WeatherDetailsItem";

interface Props {
  weather: Weather;
}

const WeatherDetailsCard: FC<Props> = ({ weather }) => {
  return (
    <View style={styles.container} testID="WeatherDetailsCard">
      <View style={styles.detailsColumn}>
        <WeatherDetailsItem
          title={"Feels like"}
          text={`${temperatureToCelcius(weather.main.feels_like)}°`}
        />
        <WeatherDetailsItem
          title={"Humidity"}
          text={`${weather.main.humidity}%`}
        />
        <WeatherDetailsItem
          title={"Visibility"}
          text={`${weather.visibility} m`}
        />
        <WeatherDetailsItem
          title={"Sunset"}
          text={convertTime(weather.sys.sunset)}
        />
      </View>
      <View style={styles.detailsColumn}>
        <WeatherDetailsItem
          title={"Cloudiness"}
          text={`${weather.clouds.all}%`}
        />
        <WeatherDetailsItem
          title={"Pressure"}
          text={`${weather.main.pressure}`}
        />
        <WeatherDetailsItem
          title={"Wind Speed"}
          text={`${weather.wind.speed} m/s`}
        />
        <WeatherDetailsItem
          title={"Sunrise"}
          text={convertTime(weather.sys.sunrise)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    flexDirection: "row",
    marginTop: 20,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3,
    elevation: 4,
  },
  detailsColumn: { flex: 1, margin: 2 },
});

export default WeatherDetailsCard;
