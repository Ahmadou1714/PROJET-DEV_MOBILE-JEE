import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Rectangle_Vert() {
  return (
    <View style={styles.rectangle}></View>
  );
}

const styles = StyleSheet.create({
  rectangle: {
    backgroundColor: 'green',
    height: 100,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Rectangle_Vert;
