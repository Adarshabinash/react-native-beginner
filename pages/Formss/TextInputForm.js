import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  TextInput,
  Text,
  StyleSheet,
} from 'react-native';

import {useState} from 'react';

const TextInputForm = () => {
  const [name, setName] = useState('');
  return (
    <SafeAreaView style={styles.safeContainer}>
      <TextInput
        style={styles.input}
        value={name}
        placeholder="Type here..."
        onChangeText={setName} //?----Unlike we do in react, in onChangeText, we simply have to mention the state that will hold the updated state
      />
      {name ? <Text style={styles.text}>My name is {name}</Text> : null}
    </SafeAreaView>
  );
};

export default TextInputForm;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: StatusBar.currentHeight,
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1,
  },
  text: {
    fontSize: 20,
    marginLeft: 12,
  },
});
