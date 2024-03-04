import React from 'react';
import {View, StyleSheet, Platform} from 'react-native';
// import Layout from './pages/Layouts/Layout';
// import FlexBasicProps from './pages/Layouts/FlexBasicProps';
// import DimensionUI from './pages/DynamicUI/DimensionsBasics';

//~-----------For Pokemon cards-----------------
import PokemonCard from './components/Pokemons/PokemonCard';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Layout /> */}
      {/* <FlexBasicProps /> */}
      {/* <DimensionUI /> */}
      <PokemonCard />
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
