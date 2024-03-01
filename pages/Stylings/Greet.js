import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';

export default Greet = () => {
  return (
    <View style={styles.container}>
      <View style={styles.darkmode}>
        <Text style={styles.darkmodeText}>
          Styles Inheritance <Text style={styles.boldText}>This is bold</Text>{' '}
        </Text>
      </View>
      <View style={[styles.lightblueBox, styles.box, styles.boxShadow]}>
        <Text>Light-blue box</Text>
      </View>
      <View style={[styles.lightgreenBox, styles.box, styles.androidShadow]}>
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
    width: '60%',
    height: '30%',
    paddingHorizontal: '10%',
    marginVertical: '3%',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
  },

  lightblueBox: {
    backgroundColor: 'lightblue',
  },
  lightgreenBox: {
    backgroundColor: 'lightgreen',
  },
  boxShadow: {
    //^---------------------In case of the box shadow, we have to mention all the properties separatly...
    shadowColor: 'grey', //?-----------shadowColor- For the color of the assigned shadow.
    shadowOffset: {
      //?-------------shadowOffset defines the width and height of the shadow that will be assigned
      width: 6,
      height: 3,
    },
    shadowOpacity: 0.6, //For the transparency of the shadow
    shadowRadius: 4,
  },
  //^--------In the android device, we have to use the elevation property so that we can add the shadow effect. However the above boxShadow is good for the iOS devices
  androidShadow: {
    elevation: 10,
    shadowColor: 'red',
  },
  darkmode: {
    backgroundColor: 'black',
    padding: 20,
  },
  darkmodeText: {
    color: 'white',
  },
  boldText: {
    fontWeight: 'bold',
  },
});
