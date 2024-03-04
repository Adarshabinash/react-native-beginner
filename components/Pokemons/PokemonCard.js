import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default function PokemonCard() {
  return (
    <View style={styles.card}>
      <Text>Pokemon Cards</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    margin: 16,
    elevation: 5,
  },
});
