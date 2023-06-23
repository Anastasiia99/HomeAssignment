import { FC } from "react";
import { StyleSheet, View } from "react-native";

const ListItemSeparator: FC<{}> = () => {
  return <View testID="ListItemSeparator" style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#dedede",
    height: 1,
  },
});

export default ListItemSeparator;
