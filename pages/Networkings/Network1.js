import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';

const Network1 = () => {
  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = async limit => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setPostList(data);
        setIsLoading(false);
      });
  };

  const handleRefresh = () => {
    setRefreshing(true);
    fetchData(20);
    setRefreshing(false);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchData(10);
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <SafeAreaView>
          <ActivityIndicator size="large" color="0000ff" />
        </SafeAreaView>
      ) : (
        <FlatList
          data={postList}
          renderItem={({item}) => {
            return (
              <View style={styles.card}>
                <Text style={styles.titleText}>{item.title}</Text>
                <Text style={styles.bodyText}>{item.body}</Text>
              </View>
            );
          }}
          ItemSeparatorComponent={() => {
            return <View style={{height: 16}} />;
          }}
          ListEmptyComponent={<Text>No Posts found</Text>}
          ListHeaderComponent={<Text style={styles.headerText}>All Posts</Text>}
          ListFooterComponent={
            <Text style={styles.footerText}>End of the list</Text>
          }
          refreshing={refreshing}
          onRefresh={handleRefresh}
        />
      )}
    </View>
  );
};

export default Network1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
  },
  titleText: {
    fontSize: 30,
  },
  bodyText: {fontSize: 24, color: '#666666'},
  headerText: {
    fontSize: 27,
    alignSelf: 'center',
  },
  footerText: {
    fontSize: 18,
    alignSelf: 'center',
  },
});
