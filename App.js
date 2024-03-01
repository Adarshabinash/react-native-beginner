import React from 'react';
import {View, StyleSheet} from 'react-native';

import Layout from './pages/Layouts/Layout';

const App = () => {
  return (
    <View style={styles.container}>
      <Layout />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E6E6FA',
    flex: 1,
  },
});
