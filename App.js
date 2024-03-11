import React from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import FlatListBasics from './pages/Lists/FlatListBasics';
// import ListsBasics from './pages/Lists/ListsBasics';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <ListsBasics /> */}
      <FlatListBasics />
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
