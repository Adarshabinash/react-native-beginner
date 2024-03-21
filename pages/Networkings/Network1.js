import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
  TextInput,
  Button,
} from 'react-native';

const Network1 = () => {
  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [isPosting, setIsPosting] = useState(false);

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

  const addPost = async () => {
    setIsPosting(true);
    fetch(`https://jsonplaceholder.typicode.com/posts`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: postTitle,
        body: postBody,
      }),
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        setPostList([...data, ...postList]);
        setIsPosting(false);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Post Title"
          value={postTitle}
          onChangeText={setPostTitle}
        />
        <TextInput
          style={styles.input}
          placeholder="Post Title"
          value={postBody}
          onChangeText={setPostBody}
        />
        <Button
          title={isPosting ? 'Adding...' : 'Add Post'}
          onPress={addPost}
          disabled={isPosting}
        />
      </View>
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
  inputContainer: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    margin: 16,
  },
  input: {
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    marginBottom: 8,
    padding: 8,
    borderRadius: 8,
  },
});
