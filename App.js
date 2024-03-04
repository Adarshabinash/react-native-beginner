import React from 'react';
import {View, StyleSheet} from 'react-native';

import Layout from './pages/Layouts/Layout';
import FlexBasicProps from './pages/Layouts/FlexBasicProps';
import SafeAreaviewBasics from './pages/SafeAreaviewBasics';
// import DimensionUI from './pages/DynamicUI/DimensionsBasics';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Layout /> */}
      {/* <FlexBasicProps /> */}
      {/* <DimensionUI /> */}
      <SafeAreaviewBasics />
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
