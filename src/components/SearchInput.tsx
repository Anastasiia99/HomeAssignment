import { FC, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";

interface Props {
  onSearch: (searchText: string) => void;
  searchText: string;
  isError: boolean;
}

const SearchInput: FC<Props> = ({ onSearch, isError, searchText }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <>
      <View
        testID="SearchInputContainer"
        style={[styles.container, isFocused ? styles.inputFocused : null]}
      >
        <TextInput
          testID="SearchInput"
          onChangeText={onSearch}
          style={styles.input}
          value={searchText}
          placeholder="Enter the name of a city"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <Feather name="search" size={24} color="#dedede" />
      </View>
      {isError && <Text style={styles.errorText}>Unable to find the city</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#dedede",
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 40,
  },
  inputFocused: {
    borderColor: "#949494",
  },
  errorText: {
    color: "red",
    fontSize: 12,
  },
});

export default SearchInput;
