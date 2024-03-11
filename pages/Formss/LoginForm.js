import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  console.log('username----------->', username);
  console.log('password------------>', password);

  return (
    <View style={styles.container}>
      <View style={styles.form}>
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
    </View>
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
});
