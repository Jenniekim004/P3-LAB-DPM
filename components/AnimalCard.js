import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class AnimalCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.animal.name,
      image: this.props.animal.image,
    };
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    if (nextProps.animal.name !== nextState.name) {
      return {
        name: nextProps.animal.name,
        image: nextProps.animal.image,
      };
    }
    return null;
  }

  componentDidMount() {
    console.log(`AnimalCard for ${this.state.name} mounted`);
  }

  componentWillUnmount() {
    console.log(`AnimalCard for ${this.state.name} will unmount`);
  }

  render() {
    const { name, image } = this.state;
    return (
      <View style={styles.card}>
        <Image source={image} style={styles.image} />
        <Text style={styles.name}>{name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    width: 200,
    height: 250,
    margin: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default AnimalCard;
