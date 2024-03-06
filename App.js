import React from 'react';
import {View, StyleSheet, Platform} from 'react-native';
// import Layout from './pages/Layouts/Layout';
// import FlexBasicProps from './pages/Layouts/FlexBasicProps';
// import DimensionUI from './pages/DynamicUI/DimensionsBasics';

//~-----------For Pokemon cards-----------------
import PokemonCard from './components/Pokemons/PokemonCard';

const App = () => {
  const pokemonData = [
    {
      name: 'Charmander',
      image: require('./assets/Pokemons/Charmander.jpg'),
      type: 'Fire 🔥',
      hp: 40,
      moves: ['Scratch', 'Ember', 'Growl', 'Leer'],
      weakness: ['Water', 'Rock'],
    },
    {
      name: 'Pikachu',
      image: require('./assets/Pokemons/Pikachu.jpg'),
      type: 'Electric ⚡',
      hp: 46,
      moves: ['Thunderbolt', 'Scratch', 'Iron Tail', 'Quick'],
      weakness: ['Water', 'Rock'],
    },
    {
      name: 'Squirtle',
      image: require('./assets/Pokemons/Squirtle.jpg'),
      type: 'Water 💧',
      hp: 40,
      moves: ['Water Gun', 'Ember', 'Shell Spin', 'Scratch'],
      weakness: ['Electric', 'Grass'],
    },
    {
      name: 'Bulbasaur',
      image: require('./assets/Pokemons/Bulbasaur.jpg'),
      type: 'Grass 🍃',
      hp: 42,
      moves: ['Leaf', 'Whip', 'Scratch', 'Tackle'],
      weakness: ['Psychic', 'Rock'],
    },
    {
      name: 'Marowak',
      image: require('./assets/Pokemons/Marowak.jpg'),
      type: 'Bone 🦴',
      hp: 36,
      moves: ['Scratch', 'Bone', 'Bonemerang', 'Scratch'],
      weakness: ['Water', 'Electric'],
    },
    {
      name: 'Dragonite',
      image: require('./assets/Pokemons/Dragonite.png'),
      type: 'Dragon 🔥',
      hp: 66,
      moves: ['Fly', 'Punch', 'Sonic', 'Hyperbeam'],
      weakness: ['Rock', 'Electric'],
    },
    {
      name: 'Pidgeot',
      image: require('./assets/Pokemons/Pidgeot.png'),
      type: 'Flying 🦅',
      hp: 46,
      moves: ['Fly', 'Gust Wind', 'Wing', 'Scratch'],
      weakness: ['Fire', 'Electric'],
    },
  ];

  return (
    <View style={styles.container}>
      {/* <Layout /> */}
      {/* <FlexBasicProps /> */}
      {/* <DimensionUI /> */}
      <PokemonCard pokemons={pokemonData} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E6E6FA',
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
});
