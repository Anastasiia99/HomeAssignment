import { FC } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { City } from "../types";
import CityListItem from "./CityListItem";
import ListItemSeparator from "./ListItemSeparator";

interface Props {
  cities: City[];
}

const CityList: FC<Props> = ({ cities }) => {
  const renderCityItem = ({ item }: { item: City }) => (
    <CityListItem city={item} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cities}
        renderItem={renderCityItem}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CityList;
