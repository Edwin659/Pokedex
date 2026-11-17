import { View, Text, Image, StyleSheet, ActivityIndicator } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import { useState,useEffect } from "react";
const ARTWORK =
"https://raw.githubusercontent.com/PokeAPI/sprites" +
  "/master/sprites/pokemon/other/official-artwork/";

const TYPE_COLORS = {
  Grass: "#78C850",
  Fire: "#F08030",
  Water: "#6890F0",
  Electric: "#F8D030",
  Normal:"#9E9C6B",
  Bug: "#A6B91A",
  Poison:"#a33ea1" ,
  Ground: "#deb650",
  Rock:"#b6a136" ,
  Flying:"#90a1f0" ,
  Psychic:"#f85888" ,
  Fighting: "#c03028",
  Ice:"#96d9d6" ,
  Ghost:"#735797" ,
  Dragon: "#6F35FC",
  Dark: "#705746",
  Fairy:"#D685AD" ,
};

const CARD_COLORS = {
  Grass: "#bae3a5",
  Fire: "#f7bd94",
  Water: "#b2c7f7",
  Electric: "#fbe693",
  Normal:"#BCBB96" ,
  Bug: "#daea69",
  Poison:"#d48dd2" ,
  Ground: "#ead190",
  Rock:"#ccb853" ,
  Flying:"#bdc7f6" ,
  Psychic:"#fba1bc" ,
  Fighting: "#e0736d",
  Ice: "#ceedec",
  Ghost:"#9a83b8" ,
  Dragon: "#a580fd",
  Dark: "#94735d",
  Fairy:"#e9bed3" ,
};

export default function FichePokemon() {
  const { number } = useLocalSearchParams();
  const [pokemon, setPokemon] = useState(null);
  const capitalize = (str) => (str ? str.charAt(0).toUpperCase() + str.slice(1) : "");

  const API_NUMBER = `https://pokeapi.co/api/v2/pokemon/${number}`;

  async function charger() {
    try {
      const reponse = await fetch(API_NUMBER);
      const data = await reponse.json();
      setPokemon(data);
    } catch (error) {
      console.error("Erreur lors du chargement:", error);
    }
  }
  useEffect(() => {
    charger();
  }, [number]);

  if (pokemon==null) {
    return <ActivityIndicator size="large" color={"black"} style={{ flex: 1 }} />;
  }

  const pokemonType = capitalize(pokemon.types?.[0]?.type?.name) ;
  const typeColor = TYPE_COLORS[pokemonType];
  const cardColor = CARD_COLORS[pokemonType];

  return (
    <View style={[styles.container,  { backgroundColor: cardColor },]}>
      <Stack.Screen options={{ title: pokemon.name }} />
        <Image
          source={{
          uri: `${ARTWORK}${pokemon.id}.png`
        }}
          style={styles.image}

        />
        <View style={styles.infoContainer} >
          <Text style={styles.number}>#{pokemon.id}</Text>
        <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
        <View style={styles.info}>
          <Text>Height : {pokemon.height} m</Text>
          <Text>Weight : {pokemon.weight} kg</Text>
        </View>
        <Text style={[styles.type, { backgroundColor: typeColor }]}>{pokemonType}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: '60%',
    width: '80%',
    padding: 24,
    borderRadius: 50,
    margin: 5,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 50
  },
  image: {
    width: 200,
    height: 200
  },
  infoContainer: {
    flex: 1,
    alignItems: "center"
  },
  name: {
    fontWeight: "bold",
    fontSize: 30,
    paddingVertical:5
  },
  number: {
    color: "grey",
    fontSize:15
  },
  type: {
    padding:10,
    borderRadius: 10,
    textAlign: "center",
  },
  info: {
    marginBottom: 5,
    alignItems:"center"
  }
});
