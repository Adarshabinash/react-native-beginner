import React from 'react';
import {View, Text} from 'react-native';

const FirstPage = () => {
  return (
    <View style={{backgroundColor: 'plum', flex: 1, alignItems: 'center'}}>
      <Text>This is a text</Text>
      <Text>
        <Text style={{color: 'white'}}>This is {''}</Text>also a text
      </Text>
    </View>
  );
};

export default FirstPage;
