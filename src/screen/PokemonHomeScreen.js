import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import PokemonGridTile from "../components/PokemonGridTile";
import { useEffect, useState } from "react";
import { fetchPokemonList } from "../api/fetchPokemonList";
import { fetchPokemonByName } from "../api/fetchPokemonByName";
import { SearchBar } from 'react-native-elements';
import FilterComponent from "../components/FilterComponent";

export default function PokemonHomeScreen({ navigation }) {
  const [pokemonList, setPokemonData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const [showFilters, setShowFilters] = useState(false);

  const changeHandler = async (value) => {
    // e.preventDefault();

    
    setInputValue(value);
    const filteredList = await fetchPokemonByName(value.toLowerCase());
    setPokemonData(filteredList);
  };


  async function getAllPokemon() {
    const data = await fetchPokemonList();

    return setPokemonData(data);
  }

  useEffect(() => {
    getAllPokemon();
  }, []);

  function renderPokemon(itemData) {
    function pressHandler() {
      navigation.navigate("PokemonDetails", {
        pokemonId: itemData.item.pokeId,
        pokemonName: itemData.item.name,
      });
    }

    const pokemonGridProps = {
      name: itemData.item.name,
      pokeId: itemData.item.pokeId,
      type: itemData.item.type,
      onPress: pressHandler,
    };

    return <PokemonGridTile {...pokemonGridProps} />;
  }

  return (
    <SafeAreaView>
      <View style={styles.outerContainer}>
        <View style={styles.innerContainer}>
          <View style={styles.textContainer}>
            <Text testID="title" style={styles.text}>
              Search for any pokémon that exist on this planet
            </Text>
          </View>
          <View style={styles.searchFilterContainer}>
            <View style={styles.searchContainer}>
              <SearchBar
                placeholder="Name"
                onChangeText={changeHandler}
                value={inputValue}
                lightTheme
                round
              />
            </View>
            <FilterComponent showFilters={showFilters} setShowFilters={setShowFilters} />
          </View>
        </View>
        <View tyle={styles.gridContainer}>
          <FlatList
            data={pokemonList}
            keyExtractor={(item) => item.pokeId}
            renderItem={renderPokemon}
            numColumns={2}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    paddingTop: 50,
    justifyContent: "center",
    backgroundColor: "#3f377f",
  },
  innerContainer: {
    // backgroundColor: "#a6cbf0",
  },
  textContainer: {
    margin: 16,
  },
  text: {
    color: "#bcc2ce",
    fontSize: 16,
    fontWeight: "bold",
  },
  searchFilterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
    borderRadius: 5,
  },
  searchContainer: {
    flex: 1,
    borderRadius: 5,
  },
  input: {
    height: 40,
    width: "95%",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#7899c4",
  },
  filterContainer: {
    height: 40,
    width: 50,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#403ed9",
    borderColor: "black",
    borderRadius: 5,
    borderWidth: 1,
  },
  filter: {
    color: "white",
  },
  buttonPressed: {
    opacity: 0.5,
  },
  gridContainer: {
    paddingTop: 5,
  },
});
