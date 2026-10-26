      {/* <Pressable style={styles.element}>
        <Text>FIRE</Text>
        </Pressable>*/}

function chooseType(POKEMONS) {
  const FIRE = POKEMONS.filter((p) => p.type === "Feu");
  const WATER = POKEMONS.filter((p) => p.type === "Eau");
  const ELEC = POKEMONS.filter((p) => p.type === "Electrik");
  const GRASS =  POKEMONS.filter((p) => p.type === "Plante");
}

export default function Filtre(){
  return (
    <View>
      {/* <Pressable style={styles.element}>
        <Text>FIRE</Text>
        </Pressable>*/}
    </View>
  );
}
