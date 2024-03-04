import React from 'react';

import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  useWindowDimensions,
} from 'react-native';

const DimensionUI = () => {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.box,
          {
            width: windowWidth > 500 ? '70%' : '90%',
            height: windowHeight > 600 ? ' 60%' : '90%',
          },
        ]}>
        <Text style={[styles.text, {fontSize: windowWidth > 200 ? 40 : 35}]}>
          Welcome !
        </Text>
      </View>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

console.log(`windowWidth : ${windowWidth}  windowHeight :${windowHeight} `);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'plum',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: windowWidth > 500 ? '70%' : '90%',
    height: windowHeight > 600 ? '60%' : '90%',
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: windowWidth > 500 ? 50 : 24,
  },
});

export default DimensionUI;
