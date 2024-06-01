import React from 'react';
import { View, Text, SafeAreaView, FlatList, TextInput, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import CategoryMockUp from './src/MockUpData/CategoryMockUp';
import OngoingTaskMockUp from './src/MockUpData/OngoingTaskMockUp';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.profileContainer}>
          <View style={{ marginTop: 10 }}>
            <Text style={styles.profileText}>Hello, Devs</Text>
            <Text>14 tasks today</Text>
          </View>
          <TouchableOpacity>
            <Image source={require('./assets/person.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.searchContainer}>
          <View style={styles.searchInput}>
            <Image source={require('./assets/search.png')} />
            <TextInput placeholder="Search" style={styles.searchTextInput} />
          </View>
          <Image source={require('./assets/setting.png')} />
        </View>
        <Text style={styles.categoryTitle}>Categories</Text>
        <FlatList
          data={CategoryMockUp}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.categoryItem}>
              <Text style={styles.categoryText}>{item.title}</Text>
              <Text>{item.task}</Text>
              <Image source={item.image} />
            </View>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ columnGap: 15 }}
        />
        <Text style={styles.categoryTitle}>Ongoing Task</Text>
        <FlatList
          data={OngoingTaskMockUp}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.ongoingTask}>
              <Text style={styles.ongoingTaskText}>{item.text}</Text>
            </View>
          )}
          contentContainerStyle={{ rowGap: 15 }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
    gap: 5,
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    alignItems: 'center',
  },
  profileText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  scrollContainer: {
    marginHorizontal: 15,
  },
  searchContainer: {
    flexDirection: 'row',
    marginTop: 50,
  },
  searchInput: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    marginRight: 15,
    borderRadius: 15,
  },
  searchTextInput: {
    width: 270,
    marginLeft: 10,
  },
  categoryTitle: {
    marginTop: 25,
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  categoryItem: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  categoryText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  ongoingTask: {
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#E8D1BA',
  },
  ongoingTaskText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
