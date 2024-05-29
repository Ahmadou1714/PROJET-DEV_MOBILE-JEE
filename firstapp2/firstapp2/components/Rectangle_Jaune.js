import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Rectangle_Jaune() {
  return (
    <View style={styles.rectangle}></View>
  );
}

const styles = StyleSheet.create({
  rectangle: {
    backgroundColor: 'yellow',
    height: 100,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Rectangle_Jaune;
