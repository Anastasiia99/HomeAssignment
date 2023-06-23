import { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AppStackParamList, City } from "../types";

interface Props {
  city: City;
}

const CityListItem: FC<Props> = ({ city }) => {
  const navigation = useNavigation<StackNavigationProp<AppStackParamList>>();

  const handlePress = () => {
    navigation.navigate("WeatherDetails", {
      city: city.name,
      coordinates: {
        lat: city.lat,
        lon: city.lon,
      },
    });
  };

  return (
    <TouchableOpacity
      testID="CityItem"
      style={styles.container}
      onPress={handlePress}
    >
      <View>
        <Text>{city.name}</Text>
        <View style={styles.details}>
          <Text style={styles.detailsText}>{city.country}</Text>
          {city.state && (
            <Text style={styles.detailsText}>{`, ${city.state}`}</Text>
          )}
        </View>
      </View>
      <AntDesign name="right" size={16} color="#9c9c9c" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  details: {
    flexDirection: "row",
    paddingTop: 5,
  },
  detailsText: {
    fontSize: 12,
    color: "#9c9c9c",
  },
});

export default CityListItem;
