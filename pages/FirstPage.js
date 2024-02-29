import React, {useState} from 'react';
import {View, StatusBar} from 'react-native';

const FirstPage = () => {
  return (
    <View style={{backgroundColor: 'plum', flex: 1, padding: 20}}>
      <StatusBar backgroundColor="lightgreen" barStyle="light-content" />
    </View>
  );
};

export default FirstPage;
