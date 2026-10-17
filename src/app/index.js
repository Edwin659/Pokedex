import { Text,View, StyleSheet, ScrollView, Pressable } from "react-native";
import Titre from "../components/Titre"
import PokemonCard from "../components/PokemonCard"

const ARTWORK =
"https://raw.githubusercontent.com/PokeAPI/sprites" +
"/master/sprites/pokemon/other/official-artwork/";

const POKEMONS = [
  { number: 1, name: "Bulbizarre", type: "Plante" },
  { number: 4, name: "Salamèche", type: "Feu" },
  { number: 7, name: "Carapuce", type: "Eau" },
  { number: 25, name: "Pikachu", type: "Electrik" },
  { number: 37, name: "Goupix", type: "Feu" },
  { number: 43, name: "Mystherbe", type: "Plante" },
  { number: 172, name: "Pichu", type: "Electrik" },
];

function chooseType(POKEMONS) {
  const FIRE = POKEMONS.filter((p) => p.type === "Feu");
  const WATER = POKEMONS.filter((p) => p.type === "Eau");
  const ELEC = POKEMONS.filter((p) => p.type === "Electrik");
  const GRASS =  POKEMONS.filter((p) => p.type === "Plante");
}

export default function Index() {
  return (
    <ScrollView style={styles.uppercontainer}>
      <Titre />
      <View>
      <Pressable style={styles.element}>
        <Text>FIRE</Text>
        </Pressable>
      </View>
      <Text>{POKEMONS.length} pokemons possédés</Text>
      {POKEMONS.map((pokemon) => (
        <PokemonCard
          key={pokemon.number}
          number={pokemon.number}
          name={pokemon.name}
          type={pokemon.type}
          ARTWORK={ARTWORK}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  uppercontainer: {
    backgroundColor: "lightgrey",
    padding:10
  },
  element: {
    backgroundColor: "white",
    padding: 10,
    margin: 10,
    borderRadius:40
  }
});
