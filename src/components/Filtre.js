import { Text,View, StyleSheet, Pressable } from "react-native";

export default function Filtre({ typeFiltre, chooseType, capturesSeul, setCapturedSeul}) {
  const handleFilterPressType = (type) => {
      if (typeFiltre === type) {
        chooseType(null);
      } else {
        chooseType(type);
      }
    };

  const handleFilterPressCapture = () => {
        setCapturedSeul(!capturesSeul);
    };

  return (
    <View style={styles.filterContainer}>
      <Pressable style={[styles.element]} onPress={handleFilterPressCapture}>
        <Text style={[styles.text]} >{capturesSeul ? "🔄 Tous (Captifs actif)" : "🎯 Mes captures"}</Text>
      </Pressable>
      <Pressable style={[styles.element, typeFiltre === "Feu"]} onPress={()=>handleFilterPressType("fire")}>
        <Text style={[styles.text, typeFiltre === "Feu"]} >{typeFiltre === "fire" ? "🔄 Tous (Feu actif)" : "🔥 Feu"}</Text>
      </Pressable>
      <Pressable style={[styles.element, typeFiltre === "Eau"]} onPress={()=>handleFilterPressType("water")}>
        <Text style={[styles.text, typeFiltre === "Eau"]} >{typeFiltre === "water" ? "🔄 Tous (Eau actif)" : "🌊 Eau"}</Text>
      </Pressable>
      <Pressable style={[styles.element, typeFiltre === "Plante"]} onPress={()=>handleFilterPressType("grass")}>
        <Text style={[styles.text, typeFiltre === "Plante"]} >{typeFiltre === "grass" ? "🔄 Tous (Plante actif)" : "🌱 Plante"}</Text>
      </Pressable>
      <Pressable style={[styles.element, typeFiltre === "Electrik"]} onPress={()=>handleFilterPressType("electric")}>
        <Text style={[styles.text, typeFiltre === "Electrik"]} >{typeFiltre === "electric" ? "🔄 Tous (Electrik actif)" : "⚡ Electrik"}</Text>
      </Pressable>
      <Pressable style={[styles.element, typeFiltre === "Normal"]} onPress={()=>handleFilterPressType("normal")}>
        <Text style={[styles.text, typeFiltre === "Normal"]} >{typeFiltre === "normal" ? "🔄 Tous (Normal actif)" : "⭐ Normal"}</Text>
      </Pressable>
      <Pressable style={[styles.element, typeFiltre === "Insecte"]} onPress={()=>handleFilterPressType("bug")}>
        <Text style={[styles.text, typeFiltre === "Insecte"]} >{typeFiltre === "bug" ? "🔄 Tous (Insecte actif)" : "🐛 Insecte"}</Text>
      </Pressable>
      <Pressable style={[styles.element, typeFiltre === "Poison"]} onPress={()=>handleFilterPressType("poison")}>
        <Text style={[styles.text, typeFiltre === "Poison"]} >{typeFiltre === "poison" ? "🔄 Tous (Poison actif)" : "🫟 Poison"}</Text>
      </Pressable>
      <Pressable style={[styles.element, typeFiltre === "Sol"]} onPress={() => handleFilterPressType("ground")}>
        <Text style={[styles.text, typeFiltre === "Sol"]} >{typeFiltre === "ground" ? "🔄 Tous (Sol actif)" : "✊ Sol"}</Text>
      </Pressable>
      <Pressable style={[styles.element, typeFiltre === "Roche"]} onPress={() => handleFilterPressType("rock")}>
        <Text style={[styles.text, typeFiltre === "Roche"]} >{typeFiltre === "rock" ? "🔄 Tous (Roche actif)" : "🪨 Roche"}</Text>
      </Pressable>
      <Pressable style={[styles.element, typeFiltre === "Vol"]} onPress={() => handleFilterPressType("flying")}>
        <Text style={[styles.text, typeFiltre === "Vol"]} >{typeFiltre === "flying" ? "🔄 Tous (Vol actif)" : "🪽 Vol"}</Text>
      </Pressable>
      <Pressable style={[styles.element, typeFiltre === "Psy"]} onPress={() => handleFilterPressType("psychic")}>
        <Text style={[styles.text, typeFiltre === "Psy"]} >{typeFiltre === "psychic" ? "🔄 Tous (Psy actif)" : "🔮 Psy"}</Text>
      </Pressable>
      <Pressable style={[styles.element, typeFiltre === "Combat"]} onPress={() => handleFilterPressType("fighting")}>
        <Text style={[styles.text, typeFiltre === "Combat"]} >{typeFiltre === "fighting" ? "🔄 Tous (Combat actif)" : "⚔️ Combat"}</Text>
      </Pressable>
      <Pressable style={[styles.element, typeFiltre === "Glace"]} onPress={() => handleFilterPressType("ice")}>
        <Text style={[styles.text, typeFiltre === "Glace"]} >{typeFiltre === "ice" ? "🔄 Tous (Glace actif)" : "❄️ Glace"}</Text>
      </Pressable>
      <Pressable style={[styles.element, typeFiltre === "Spectre"]} onPress={() => handleFilterPressType("ghost")}>
        <Text style={[styles.text, typeFiltre === "Spectre"]} >{typeFiltre === "ghost" ? "🔄 Tous (Spectre actif)" : "👁️ Spectre"}</Text>
      </Pressable>
      <Pressable style={[styles.element, typeFiltre === "Dragon"]} onPress={() => handleFilterPressType("dragon")}>
        <Text style={[styles.text, typeFiltre === "Dragon"]} >{typeFiltre === "dragon" ? "🔄 Tous (Dragon actif)" : "🐲 Dragon"}</Text>
      </Pressable>
      <Pressable style={[styles.element, typeFiltre === "Ténèbres"]} onPress={() => handleFilterPressType("dark")}>
        <Text style={[styles.text, typeFiltre === "Ténèbres"]} >{typeFiltre === "dark" ? "🔄 Tous (Ténèbres actif)" : "🌑 Ténèbres"}</Text>
      </Pressable>
      <Pressable style={[styles.element, typeFiltre === "Fée"]} onPress={() => handleFilterPressType("fairy")}>
        <Text style={[styles.text, typeFiltre === "Fée"]} >{typeFiltre === "fairy" ? "🔄 Tous (Fée actif)" : "🧚🏻‍♀️ Fée"}</Text>
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
    margin: 3,
    borderRadius:40
  }
});
