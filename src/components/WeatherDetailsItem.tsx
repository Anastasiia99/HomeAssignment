import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  title: string;
  text: string | number;
}

const WeatherDetailsItem: FC<Props> = ({ title, text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 15,
    marginVertical: 5,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3,
    elevation: 4,
    width: "100%",
  },
  title: {
    color: "#949494",
  },
  text: { fontSize: 25 },
});

export default WeatherDetailsItem;
