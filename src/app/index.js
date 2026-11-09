import { Text, View, StyleSheet, ScrollView, Pressable, FlatList } from "react-native";
import { useState } from "react";
import Titre from "../components/Titre"
import PokemonCard from "../components/PokemonCard"
import Count from "../components/Count"
import Aide from "../components/Aide"
import Filtre from "../components/Filtre"
import POKEMONS from "../data/pokemon"

const ARTWORK =
"https://raw.githubusercontent.com/PokeAPI/sprites" +
"/master/sprites/pokemon/other/official-artwork/";

export default function Index() {
  const [typeFiltre, chooseType] = useState(null);
  const [isCaptured, setCaptured] = useState([]);
  const [capturesSeulement, setCapturesSeulement] = useState(false);

  const visibles = POKEMONS.filter((p) =>
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
    <ScrollView style={styles.uppercontainer}>
      <Titre />
      <View style={styles.container}>
        <Text>{visibles.length} pokemons</Text>
        <Text>{isCaptured.length} capturés</Text>
        <Aide />
      </View>
      <Filtre typeFiltre={typeFiltre} chooseType={chooseType} capturesSeul={capturesSeulement} setCapturedSeul={setCapturesSeulement} />
        <FlatList
        data={visibles}
        extraData={isCaptured}
          keyExtractor={(item)=>String(item.number)}
          numColumns={2}
          columnWrapperStyle={{ gap: 12 }}
          contentContainerStyle={{ padding: 16, gap: 12 }}
          renderItem={({ item }) => (
            <PokemonCard
              key={item.number}
              number={item.number}
              name={item.name}
              captured={isCaptured.includes(item.number)}
              onCapture={() => OnCapture(item.number)}
              type={item.type}
              ARTWORK={ARTWORK}
            />
            )}
        />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  uppercontainer: {
    backgroundColor: "lightgrey",
    padding:10
  },
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  element: {
    backgroundColor: "white",
    padding: 10,
    margin: 10,
    borderRadius:40
  }
});
