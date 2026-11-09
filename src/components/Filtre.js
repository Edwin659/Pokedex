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
      <Pressable style={[styles.element, typeFiltre === "Feu"]} onPress={()=>handleFilterPressType("Feu")}>
        <Text style={[styles.text, typeFiltre === "Feu"]} >{typeFiltre === "Feu" ? "🔄 Tous (Feu actif)" : "🔥 Feu"}</Text>
      </Pressable>
      <Pressable style={[styles.element, typeFiltre === "Eau"]} onPress={()=>handleFilterPressType("Eau")}>
        <Text style={[styles.text, typeFiltre === "Eau"]} >{typeFiltre === "Eau" ? "🔄 Tous (Eau actif)" : "🌊 Eau"}</Text>
      </Pressable>
      <Pressable style={[styles.element, typeFiltre === "Plante"]} onPress={()=>handleFilterPressType("Plante")}>
        <Text style={[styles.text, typeFiltre === "Plante"]} >{typeFiltre === "Plante" ? "🔄 Tous (Plante actif)" : "🌱 Plante"}</Text>
      </Pressable>
      <Pressable style={[styles.element, typeFiltre === "Electrik"]} onPress={()=>handleFilterPressType("Electrik")}>
        <Text style={[styles.text, typeFiltre === "Electrik"]} >{typeFiltre === "Electrik" ? "🔄 Tous (Electrik actif)" : "⚡ Electrik"}</Text>
      </Pressable>
      <Pressable style={[styles.element, typeFiltre === "Normal"]} onPress={()=>handleFilterPressType("Normal")}>
        <Text style={[styles.text, typeFiltre === "Normal"]} >{typeFiltre === "Normal" ? "🔄 Tous (Normal actif)" : "⭐ Normal"}</Text>
      </Pressable>
      <Pressable style={[styles.element, typeFiltre === "Insecte"]} onPress={()=>handleFilterPressType("Insecte")}>
        <Text style={[styles.text, typeFiltre === "Insecte"]} >{typeFiltre === "Insecte" ? "🔄 Tous (Insecte actif)" : "🐛 Insecte"}</Text>
      </Pressable>
      <Pressable style={[styles.element, typeFiltre === "Poison"]} onPress={()=>handleFilterPressType("Poison")}>
        <Text style={[styles.text, typeFiltre === "Poison"]} >{typeFiltre === "Poison" ? "🔄 Tous (Poison actif)" : "🫟 Poison"}</Text>
      </Pressable>
      <Pressable style={[styles.element, typeFiltre === "Sol"]} onPress={() => handleFilterPressType("Sol")}>
        <Text style={[styles.text, typeFiltre === "Sol"]} >{typeFiltre === "Sol" ? "🔄 Tous (Sol actif)" : "✊ Sol"}</Text>
      </Pressable>
      <Pressable style={[styles.element, typeFiltre === "Roche"]} onPress={() => handleFilterPressType("Roche")}>
        <Text style={[styles.text, typeFiltre === "Roche"]} >{typeFiltre === "Roche" ? "🔄 Tous (Roche actif)" : "🪨 Roche"}</Text>
      </Pressable>
      <Pressable style={[styles.element, typeFiltre === "Vol"]} onPress={() => handleFilterPressType("Vol")}>
        <Text style={[styles.text, typeFiltre === "Vol"]} >{typeFiltre === "Vol" ? "🔄 Tous (Vol actif)" : "🪽 Vol"}</Text>
      </Pressable>
      <Pressable style={[styles.element, typeFiltre === "Psy"]} onPress={() => handleFilterPressType("Psy")}>
        <Text style={[styles.text, typeFiltre === "Psy"]} >{typeFiltre === "Psy" ? "🔄 Tous (Psy actif)" : "🔮 Psy"}</Text>
      </Pressable>
      <Pressable style={[styles.element, typeFiltre === "Combat"]} onPress={() => handleFilterPressType("Combat")}>
        <Text style={[styles.text, typeFiltre === "Combat"]} >{typeFiltre === "Combat" ? "🔄 Tous (Combat actif)" : "⚔️ Combat"}</Text>
      </Pressable>
      <Pressable style={[styles.element, typeFiltre === "Glace"]} onPress={() => handleFilterPressType("Glace")}>
        <Text style={[styles.text, typeFiltre === "Glace"]} >{typeFiltre === "Glace" ? "🔄 Tous (Glace actif)" : "❄️ Glace"}</Text>
      </Pressable>
      <Pressable style={[styles.element, typeFiltre === "Spectre"]} onPress={() => handleFilterPressType("Spectre")}>
        <Text style={[styles.text, typeFiltre === "Spectre"]} >{typeFiltre === "Spectre" ? "🔄 Tous (Spectre actif)" : "👁️ Spectre"}</Text>
      </Pressable>
      <Pressable style={[styles.element, typeFiltre === "Dragon"]} onPress={() => handleFilterPressType("Dragon")}>
        <Text style={[styles.text, typeFiltre === "Dragon"]} >{typeFiltre === "Dragon" ? "🔄 Tous (Dragon actif)" : "🐲 Dragon"}</Text>
      </Pressable>
      <Pressable style={[styles.element, typeFiltre === "Ténèbres"]} onPress={() => handleFilterPressType("Ténèbres")}>
        <Text style={[styles.text, typeFiltre === "Ténèbres"]} >{typeFiltre === "Ténèbres" ? "🔄 Tous (Ténèbres actif)" : "🌑 Ténèbres"}</Text>
      </Pressable>
      <Pressable style={[styles.element, typeFiltre === "Acier"]} onPress={() => handleFilterPressType("Acier")}>
        <Text style={[styles.text, typeFiltre === "Acier"]} >{typeFiltre === "Acier" ? "🔄 Tous (Acier actif)" : "🔩 Acier"}</Text>
      </Pressable>
      <Pressable style={[styles.element, typeFiltre === "Fée"]} onPress={() => handleFilterPressType("Fée")}>
        <Text style={[styles.text, typeFiltre === "Fée"]} >{typeFiltre === "Fée" ? "🔄 Tous (Fée actif)" : "🧚🏻‍♀️ Fée"}</Text>
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
