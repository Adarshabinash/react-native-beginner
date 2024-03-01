import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Box({children, style}) {
  return (
    <View style={[styles.box, style]}>
      <Text style={styles.boxtext}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#FFDAB9',
    padding: 30,
  },
  boxtext: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
