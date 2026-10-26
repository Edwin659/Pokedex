import { useState } from "react"
import { Text, StyleSheet, View, Pressable } from "react-native"

export default function Aide() {
  const [isDisplayed, setIsDeplayed] = useState(false);
  return (
    <View style={styles.container}>
      <Pressable onPress={() => setIsDeplayed(!isDisplayed)} style={styles.button}>
        <Text> {isDisplayed ? "Masquez l'aide" : "Afficher l'aide"}</Text>
      </Pressable>
      {isDisplayed &&
        <View style={styles.helpBox}>
          <Text>
            Appuyer sur Capturer pour ajouter un Pokémon à votre équipe
          </Text>
        </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    alignItems:"flex-start"
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    paddingLeft:10,
    borderRadius: 15,
    borderColor: "#bababa",
    borderWidth:2
  },
  helpBox: {
    borderColor:"#bababa",
    marginTop: 8,
    backgroundColor: "#ededed",
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    maxWidth:230
  },
});
