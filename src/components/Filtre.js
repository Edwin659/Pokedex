import { Text,View, StyleSheet, Pressable } from "react-native";

export default function Filtre({ typeFiltre, chooseType }) {
  const handleFilterPress = (type) => {
      if (typeFiltre === type) {
        chooseType(null);
      } else {
        chooseType(type);
      }
    };

  return (
    <View style={styles.filterContainer}>
      <Pressable style={[styles.element, typeFiltre === "Feu"]} onPress={()=>handleFilterPress("Feu")}>
        <Text style={[styles.text, typeFiltre === "Feu"]} >{typeFiltre === "Feu" ? "🔄 Tous (Feu actif)" : "🔥 Feu"}</Text>
      </Pressable>
      <Pressable style={[styles.element, typeFiltre === "Eau"]} onPress={()=>handleFilterPress("Eau")}>
        <Text style={[styles.text, typeFiltre === "Eau"]} >{typeFiltre === "Eau" ? "🔄 Tous (Eau actif)" : "🌊 Eau"}</Text>
      </Pressable>
      <Pressable style={[styles.element, typeFiltre === "Plante"]} onPress={()=>handleFilterPress("Plante")}>
        <Text style={[styles.text, typeFiltre === "Plante"]} >{typeFiltre === "Plante" ? "🔄 Tous (Plante actif)" : "🌱 Plante"}</Text>
      </Pressable>
      <Pressable style={[styles.element, typeFiltre === "Electrik"]} onPress={()=>handleFilterPress("Electrik")}>
        <Text style={[styles.text, typeFiltre === "Electrik"]} >{typeFiltre === "Electrik" ? "🔄 Tous (Electrik actif)" : "⚡ Electrik"}</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  filterContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      marginVertical: 10,
    },
  element: {
    backgroundColor: "white",
    padding: 10,
    margin: 10,
    borderRadius:40
  }
});


// function chooseType(POKEMONS, type) {
//   const FIRE = POKEMONS.filter((p) => p.type === "Feu");
//   const WATER = POKEMONS.filter((p) => p.type === "Eau");
//   const ELEC = POKEMONS.filter((p) => p.type === "Electrik");
//   const GRASS = POKEMONS.filter((p) => p.type === "Plante");
//   if (typeChoisi === "Feu") return FIRE;
//   if (typeChoisi === "Eau") return WATER;
//   if (typeChoisi === "Electrik") return ELEC;
//   if (typeChoisi === "Plante") return GRASS;
//   return POKEMONS;
// }
