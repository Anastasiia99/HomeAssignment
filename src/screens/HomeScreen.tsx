import { FC, useEffect, useState } from "react";
import SearchInput from "../components/SearchInput";
import Layout from "../components/Layout";
import CityList from "../components/CityList";
import { City } from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen: FC<{}> = () => {
  const [cities, setCities] = useState<City[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const fetchCities = async (searchCity: string) => {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${searchCity}&limit=5&appid=ac2d73cc41ed66778dc378af4bfe47cf`
      );
      const data: City[] = await response.json();
      setCities(data);
    } catch (error) {
      console.error("Error fetching search results:", error);
      setError(true);
    }
  };

  const checkSavedCity = async () => {
    const value = await AsyncStorage.getItem("saved-city");
    if (value) {
      setSearchText(value);
      fetchCities(value);
    }
  };

  useEffect(() => {
    checkSavedCity();
  }, []);

  const handleSearch = (searchCity: string) => {
    setSearchText(searchCity);
    fetchCities(searchCity);
  };

  return (
    <Layout>
      <SearchInput
        onSearch={handleSearch}
        isError={error}
        searchText={searchText}
      />
      <CityList cities={cities} />
    </Layout>
  );
};

export default HomeScreen;
