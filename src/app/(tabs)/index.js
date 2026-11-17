import { Text, View, StyleSheet, Pressable, FlatList, ActivityIndicator, ActionSheetIOS } from "react-native";
import { useState,useEffect } from "react";
import { router } from 'expo-router';
import Titre from "../../components/Titre"
import PokemonCard from "../../components/PokemonCard"
import Aide from "../../components/Aide"
import Filtre from "../../components/Filtre"

const ARTWORK =
"https://raw.githubusercontent.com/PokeAPI/sprites" +
  "/master/sprites/pokemon/other/official-artwork/";

const API = "https://pokeapi.co/api/v2/pokemon?limit=200";

export default function Index() {
  const [pokemons, setPokemons] = useState(null);
  const [typeFiltre, chooseType] = useState(null);
  const [isCaptured, setCaptured] = useState([]);
  const [capturesSeulement, setCapturesSeulement] = useState(false);
  const capitalize = (str) => (str ? str.charAt(0).toUpperCase() + str.slice(1) : "");

  async function charger() {
    const reponse = await fetch(API);
    const data = await reponse.json();
    const liste = await Promise.all(
      data.results.map(async (pokemon, i) => {
        const detailReponse = await fetch(pokemon.url);
        const detail = await detailReponse.json();
        return {
          number: i + 1,
          name: detail.name,
          type: detail.types[0].type.name,
        }
      })
    );
    setPokemons(liste);
  }

  useEffect(() => {
    charger();
  }, []);

  if (pokemons==null) {
    return <ActivityIndicator size="large" color={"black"} style={{ flex: 1 }}/>;
  }

  const visibles = pokemons.filter((p) =>
    (!typeFiltre || p.type === typeFiltre) &&
    (!capturesSeulement || isCaptured.includes(p.number))
  );

  const OnCapture = (number) => {
    if (isCaptured.includes(number)) {
      setCaptured(isCaptured.filter((id) => id !== number));
    } else {
      setCaptured([...isCaptured, number]);
    }
  }

  return (
    <View style={styles.container} >
      <FlatList
        data={visibles}
        extraData={isCaptured}
        keyExtractor={(item)=>String(item.number)}
        numColumns={2}
        columnWrapperStyle={{ gap: 5 }}
        ListHeaderComponent={
          <>
            <Titre />
            <View style={styles.container}>
              <Text>{visibles.length} pokemons</Text>
              <Text>{isCaptured.length} capturés</Text>
            </View>
            <Aide />
            <Filtre typeFiltre={typeFiltre} chooseType={chooseType} capturesSeul={capturesSeulement} setCapturedSeul={setCapturesSeulement} />
          </>
        }
        renderItem={({ item }) => (
            <Pressable onPress={() => router.push({ pathname: `/pokemon/${item.number}`})}>
              <PokemonCard
                key={item.number}
                number={item.number}
                name={capitalize(item.name)}
                captured={isCaptured.includes(item.number)}
                onCapture={() => OnCapture(item.number)}
                type={capitalize(item.type)}
                ARTWORK={ARTWORK}
              />
            </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  uppercontainer: {
    backgroundColor: "lightgrey",
    marginVertical:10
  },
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 5,
  },
  element: {
    backgroundColor: "white",
    padding: 10,
    margin: 10,
    borderRadius:40
  }
});
