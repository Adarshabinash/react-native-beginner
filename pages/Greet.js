import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';

export default Greet = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.parentText}>Stylesheet API</Text>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    flex: 1,
    padding: '20%',
  },
  parentText: {
    fontSize: 29,
  },
});
