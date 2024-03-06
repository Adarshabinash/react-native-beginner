import React from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';

import PokemonLists from '../../data.json';

const ListsBasics = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        {PokemonLists.map(pokemon => {
          return (
            <View key={pokemon.id} style={styles.card}>
              <Text style={styles.cardText}>{pokemon.name}</Text>
              <Text style={styles.cardText}>{pokemon.type}</Text>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ListsBasics;

const styles = StyleSheet.create({
  pokemonConatiner: {
    flex: 1,
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 14,
    width: '70%',
    borderBottomWidth: 2,
  },
  cardText: {
    fontSize: 24,
  },
});
