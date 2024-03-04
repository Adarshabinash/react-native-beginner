import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Platform} from 'react-native';

const SafeAreaviewBasics = () => {
  // console.log('platform-------->', Platform.OS); //?----The Platform.OS will tell us our device platform
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>Welcome</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SafeAreaviewBasics;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'plum',
    flex: 1,
  },
  box: {
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  safeContainer: {
    flex: 1,
    backgroundColor: 'plum',
  },
});
