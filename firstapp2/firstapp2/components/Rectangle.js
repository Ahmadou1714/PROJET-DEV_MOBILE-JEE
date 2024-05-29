import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Rectangle() {
  return (
    <View style={styles.rectangle}>
    </View>
  );
}

const styles = StyleSheet.create({
  rectangle: {
    backgroundColor: 'red',
    height: 100,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
 
});

export default Rectangle;
