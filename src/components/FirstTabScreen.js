import React, { Component } from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class FirstTabScreen extends Component {
  
  render() {
    console.log('Nå er vi her')
    const myIcon = <Icon name="rocket" size={30} color="#900" />
    console.log(myIcon)
    return (
      <Text>FirstTabScreen!</Text>
    );
  }
}

export default FirstTabScreen