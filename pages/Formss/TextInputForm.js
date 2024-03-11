import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  TextInput,
  Text,
  StyleSheet,
  Switch,
  View,
} from 'react-native';

import {useState} from 'react';

const TextInputForm = () => {
  const [name, setName] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

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

      <TextInput
        style={styles.multilineText}
        placeholder="Write here"
        multiline //^--------Multiline here allows us to have bigger sentences into row of sentences
      />
      {name ? <Text style={styles.text}>My name is {name}</Text> : null}

      <View style={styles.switchContainer}>
        <Text style={styles.text}>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={() => setIsDarkMode(previousState => !previousState)}
          trackColor={{false: 'red', true: 'yellow'}}
          thumbColor="lightblue"
        />
      </View>
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
  multilineText: {
    minHeight: 100,
    borderWidth: 1,
    width: '90%',
    left: 10,
    textAlignVertical: 'top',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
});
