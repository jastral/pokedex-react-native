import { View, Text, StyleSheet } from 'react-native';

function FavoritePokemonScreen() {

  const favoritePokemons = () => {
    // not in the requirement only to showcase redux
    // TODO: create a star button in the pokemon details page 
    //on toggle of that button add pokemons to pokemon list and display the favourites in favourites screen
  };

  if (favoritePokemons.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite pokemons yet.</Text>
      </View>
    );
  }

  // return <PokemonList items={favoritePokemon} />;
  return <View></View>
}

export default FavoritePokemonScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});