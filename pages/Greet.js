import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';

export default Greet = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.lightblueBox, styles.box]}>
        <Text>Light-blue box</Text>
      </View>
      <View style={[styles.lightgreenBox, styles.box]}>
        <Text>Light-green box</Text>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'plum',
    flex: 1,
    padding: '20%',
  },
  box: {
    width: 200,
    height: 200,
    padding: 15,
  },

  lightblueBox: {
    backgroundColor: 'lightblue',
  },
  lightgreenBox: {
    backgroundColor: 'lightgreen',
  },
});
