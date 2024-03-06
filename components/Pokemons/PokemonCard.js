import React from 'react';
import {View, StyleSheet, Text, ScrollView, Image} from 'react-native';

export default function PokemonCard({pokemons}) {
  return (
    <ScrollView>
      {pokemons?.map((item, index) => (
        <View style={styles.card}>
          <View style={styles.nameContainer}>
            <Text style={{fontSize: 28, color: 'black'}}>{item.name}</Text>
            <Text style={styles.hp}>❤️ {item.hp}</Text>
          </View>
          <View>
            <Image
              source={item.image}
              accessabilityLabel={` ${item.name} pokemon`}
              style={styles.image}
              resizeMode="contain"
            />
            <View
              style={{
                borderWidth: 2,
                borderColor: 'red',
                borderRadius: 8,
                padding: 6,
                width: '34%',
                alignSelf: 'center',
              }}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'black',
                  textAlign: 'center',
                }}>
                {item.type}
              </Text>
            </View>
            <Text style={{fontWeight: 'bold', color: 'black', marginTop: 9}}>
              <Text>MOVES:{'  '}</Text>
              {item?.moves?.map(i => i + ',')}
            </Text>
            <Text style={{fontWeight: 'bold', color: 'black', marginTop: 9}}>
              <Text>WEAKNESS: {'  '}</Text>{' '}
              <Text>{item?.weakness?.map(i => i + ',')}</Text>
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    margin: 16,
    elevation: 5,
  },
  highlightText: {
    fontWeight: 'bold',
    color: 'black',
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  hp: {
    fontSize: 22,
    color: 'black',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
  },
});
