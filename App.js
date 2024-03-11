import React from 'react';
import {
  View,
  StyleSheet,
  Platform,
  SafeAreaView,
  StatusBar,
  TextInput,
} from 'react-native';
import TextInputForm from './pages/Formss/TextInputForm';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TextInputForm />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E6E6FA',
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});
