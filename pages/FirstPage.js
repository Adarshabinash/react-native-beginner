import React from 'react';
import {View, Text, Image} from 'react-native';
import cocacola from '../assets/coke1.jpg';
import {ImageBackground} from 'react-native';
const cocacola2 = require('../assets/coke2.jpg'); //?------We can use the require function to hold our image

const FirstPage = () => {
  return (
    <View style={{backgroundColor: 'plum', flex: 1}}>
      <Text>This is a text</Text>
      {/* <Image source={cocacola} style={{height: '30%', width: '60%'}} />
      <Image source={cocacola2} style={{height: '30%', width: '60%'}} />
      <Image
        source={{
          uri: 'https://fastly.picsum.photos/id/855/200/200.jpg?hmac=l4U_O6zoVhjz9BqOito1u4k30FNJz3hLVYjvrdE59MU',
        }}
        style={{height: 200, width: 200}}
      /> */}
      <ImageBackground
        source={cocacola}
        style={{flex: 1, height: '80%', width: '96%', left: 4}}>
        <Text style={{color: 'white'}}>THIS IS A SAMPLE TEXT</Text>
      </ImageBackground>
    </View>
  );
};

export default FirstPage;
