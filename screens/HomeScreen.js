import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import AnimalList from '../components/AnimalList';

const HomeScreen = () => {
  useEffect(() => {
    console.log('HomeScreen Mounted');
    return () => {
      console.log('HomeScreen Unmounted');
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hewan Peliharaan</Text>
      <AnimalList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default HomeScreen;
