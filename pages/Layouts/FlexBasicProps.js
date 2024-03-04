import React from 'react';
import {View, Text} from 'react-native';
import Box from '../../components/box';

const FlexBasicProps = () => {
  return (
    <View>
      <Box style={{backgroundColor: 'lightgrey', top: 75, left: 75}}>Box-A</Box>
      <Box style={{backgroundColor: 'lightgreen'}}>Box-B</Box>
      <Box style={{backgroundColor: 'lightblue', flexBasis: 140}}>Box-C</Box>
      <Box
        style={{
          backgroundColor: 'lightpink',
          top: 105,
          left: 100,
          position: 'absolute',
        }}>
        Box-D
      </Box>
      <Box style={{backgroundColor: 'lightyellow'}}>Box-E</Box>
      <Box style={{backgroundColor: 'yellow'}}>Box-F</Box>
      <Box style={{backgroundColor: 'torquise'}}>Box-G</Box>
      <Box style={{backgroundColor: 'coral'}}>Box-H</Box>
    </View>
  );
};

export default FlexBasicProps;
