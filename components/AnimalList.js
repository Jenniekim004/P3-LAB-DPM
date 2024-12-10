import React, { useState, useEffect } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import AnimalCard from './AnimalCard';

const AnimalList = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    console.log('Fetching animal data...');

    setTimeout(() => {
      setAnimals([
        { id: '1', name: 'Dog', image: require('../assets/images/dog.jpg') },
        { id: '2', name: 'Cat', image: require('../assets/images/cat.png') },
      ]);
    }, 1000);
    return () => {
      console.log('AnimalList Unmounted');
    };
  }, []);

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={animals}
        renderItem={({ item }) => <AnimalCard animal={item} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 10,
  },
});

export default AnimalList;
