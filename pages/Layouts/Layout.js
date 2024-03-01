import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Box from '../../components/box';

export default function Layout() {
  return (
    <>
      <View style={styles.container}>
        <Box style={{backgroundColor: 'lightgrey'}}>Box1</Box>
        <Box style={{backgroundColor: 'yellow', flex: 3}}>Box1</Box>
        <Box style={{backgroundColor: 'plum'}}>Box2</Box>
        <Box style={{backgroundColor: 'coral'}}>Box3</Box>
        <Box style={{backgroundColor: 'lightblue'}}>Box4</Box>
        <Box children="Box5" style={{backgroundColor: 'lightgreen'}} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#20B2AA',
    marginTop: 30,
    borderWidth: 3,
    borderColor: 'black',
    flex: 1,
  },
});
