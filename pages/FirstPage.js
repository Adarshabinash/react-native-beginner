import React, {useState} from 'react';
import {View, ActivityIndicator} from 'react-native';

const FirstPage = () => {
  return (
    <View style={{backgroundColor: 'plum', flex: 1, padding: 20}}>
      <ActivityIndicator />
      <ActivityIndicator size={'large'} />
      <ActivityIndicator size={80} color="blue" />
      <ActivityIndicator size={80} color="blue" animating={false} />
    </View>
  );
};

export default FirstPage;
