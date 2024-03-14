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
import LoginForm from './pages/Formss/LoginForm';
import Network1 from './pages/Networkings/Network1';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <TextInputForm /> */}
      {/* <LoginForm /> */}
      <Network1 />
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
