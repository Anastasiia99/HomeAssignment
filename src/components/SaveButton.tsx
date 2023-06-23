import { FC } from "react";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";

interface Props {
  onPress: () => void;
  isSaved: boolean;
}

const SaveButton: FC<Props> = ({ onPress, isSaved }) => {
  return (
    <TouchableOpacity
      testID="SaveButton"
      onPress={onPress}
      style={styles.container}
    >
      <MaterialIcons
        name={isSaved ? "favorite" : "favorite-outline"}
        size={24}
        color="black"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});

export default SaveButton;
