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
        placeholder="Type your name"
        onChangeText={setName} //?----Unlike we do in react, in onChangeText, we simply have to mention the state that will hold the updated state
        secureTextEntry //! for the types password where we want to hide the inputs
        // keyboardType="numeric"  //! for numeric or the ascii letters of the keyborad
        autoCorrect={true} //?To enable autocorrect. We can keep it false to disable.
        autoCapitalize="none" //?In case we don't wanna auto capitalize our texts. Default will enable it.
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
