import React from 'react';
import {Text, View, Image} from 'react-native';
// const cokeImage = require('../assets/coke1.jpg'); //? Can use require property if we want....
import cocacola from '../assets/coke1.jpg';

const FirstPage = () => {
  return (
    <View style={{backgroundColor: 'plum', flex: 1, alignItems: 'center'}}>
      <Text>
        <Text style={{fontWeight: 'bold', color: 'white'}}>Hello</Text> World
      </Text>

      <Image source={cocacola} />
    </View>
  );
};

export default FirstPage;
