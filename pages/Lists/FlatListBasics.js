import React from 'react';
import {View, FlatList, Text, SafeAreaView, StyleSheet} from 'react-native';
import Pokemons from '../../data.json';

const FlatListBasics = () => {
  return (
    <SafeAreaView>
      <FlatList
        data={Pokemons}
        renderItem={({item}) => (
          <View style={styles.card} key={item.id}>
            <Text style={styles.cardText}>{item.name}</Text>
            <Text style={styles.cardText}>{item.type}</Text>
          </View>
        )}
        // horizontal  //^For making the components horizontal
        keyExtractor={(item, index) => index}
        // ItemSeparatorComponent={<View style={{height: 16}} />}
        ListEmptyComponent={<Text>No data available</Text>} //^---If our data component is empty, then this will render whatever JSX given
        ListHeaderComponent={
          <Text style={styles.headerText}>Pokemon List</Text> //^----For the header of the list
        }
        ListFooterComponent={<Text>End of List</Text>} //^-----For the footer of the list
      />
    </SafeAreaView>
  );
};

export default FlatListBasics;

const styles = StyleSheet.create({
  pokemonConatiner: {
    flex: 1,
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 14,
    width: '70%',
    borderBottomWidth: 2,
    width: '90%',
    left: 15,
  },
  cardText: {
    fontSize: 24,
  },
  headerText: {
    fontSize: 23,
    textAlign: 'center',
    marginBottom: 12,
  },
});

//?-------FlatList--------
{
  /*

^FlatList is self closing and has 2 mandatory props- data(to pass the array of items that we map normally to get data)
^renderItem - This is a function that returns the JSX for rendering each list items. Similar to what we are doing in the JSX after mapping the data...Those shits inside the div or View whatever.

*/
}
