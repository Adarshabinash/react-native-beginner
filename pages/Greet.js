import React from 'react';
import {View, Button, Text} from 'react-native';

export default Greet = ({name}) => {
  return (
    <View style={{backgroundColor: 'coral', flex: 1, padding: 60}}>
      <Text> Hello {name}</Text>
    </View>
  );
};
