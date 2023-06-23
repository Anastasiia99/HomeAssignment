import { FC, ReactNode } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

interface Props {
  children: ReactNode;
  style?: ViewStyle;
}

const Layout: FC<Props> = ({ children, style }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
});

export default Layout;
