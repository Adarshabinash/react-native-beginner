import React, {useState} from 'react';
import {View, Alert, Button} from 'react-native';

const FirstPage = () => {
  return (
    <View style={{backgroundColor: 'plum', flex: 1, padding: 20}}>
      <Button title="Alert" onPress={() => Alert.alert('Invalid data')} />
      <Button
        title="Alert 2"
        onPress={() => Alert.alert('Invalid data', 'The data is incorrect !')}
      />
      <Button
        title="Alert 3"
        onPress={() =>
          Alert.alert('Invalid data', 'The data is incorrect !', [
            {
              text: 'Cancel',
              onPress: () => {
                console.log('Cancel Pressed');
              },
            },
            {
              text: 'okay',
              onPress: () => {
                console.log('Okay Pressed');
              },
            },
          ])
        }
      />
    </View>
  );
};

export default FirstPage;
