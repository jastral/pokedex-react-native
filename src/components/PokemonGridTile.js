import {
  Pressable,
  View,
  Text,
  StyleSheet,
  Platform,
  Image,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { colorTypeGradients } from "../utils/utils";

export default function PokemonGridTile({ name, pokeId, onPress, type }) {
  let finalGradient;

  if (type.length === 2) {
    finalGradient = colorTypeGradients(
      type[0].type.name,
      type[1].type.name,
      type.length
    );
  } else {
    finalGradient = colorTypeGradients(
      type[0].type.name,
      type[0].type.name,
      type.length
    );
  }

  return (
    <LinearGradient
      style={styles.gridItem}
      colors={[finalGradient[0], finalGradient[1]]}
    >
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`,
            }}
          />
          <Text style={styles.name}>{name.toUpperCase()}</Text>
          <Text style={styles.name}>{pokeId}</Text>
        </View>
      </Pressable>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 250,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    padding: 8,
    justifyContent: "center",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    overflow: "hidden",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  tinyLogo: {
    width: 150,
    height: 150,
  },
});
