import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  console.log('username----------->', username);
  console.log('password------------>', password);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
      <View style={styles.form}>
        <Image
          source={require('../../assets/Pokemons/PokeBall.png')}
          style={styles.images}
        />
        <Text style={styles.label}>Username</Text>
        <TextInput
          placeholder="Type your usrname here.."
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          placeholder="Type your password here.."
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity>
          <View style={styles.buttons}>
            <Text
              style={{fontSize: 17, textAlign: 'center', fontWeight: 'bold'}}>
              Login
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    paddingHorizontal: 28,
    justifyContent: 'center',
  },
  form: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 10,
    elevation: 18,
  },
  label: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderWidth: 2,
    borderColor: 'grey',
    padding: 10,
    marginBottom: 10,
    borderRadius: 7,
    left: -2,
  },
  buttons: {
    width: '40%',
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: '#6CB4EE',
    padding: 8,
    alignSelf: 'center',
    top: 20,
  },
  images: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    marginBottom: 40,
  },
});

//^ KeyboardAvoidingView component is useful when your keyborad is covering an input field of your application.
//^ In KeyboardAvoidingView, we have a prop which is called behaviour. This behaviour will take in padding to add a padding below the component that will give us a space between keyboard and the form
