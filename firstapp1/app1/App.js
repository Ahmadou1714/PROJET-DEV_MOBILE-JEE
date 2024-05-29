import React from 'react';
import { StyleSheet, Image, View, Text, SafeAreaView } from 'react-native';
import { Card } from 'react-native-paper';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        Première Application Mobile au Centre Informatique.
      </Text>
      <Card>
        <Image
          source={require('./assets/Panier.png')}
          style={styles.image} 
        />
      </Card>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    padding: 16,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    borderRadius: 10,
    borderColor: 'black',
    borderStyle: 'solid',
  },
  image: { 
    width: 100,
    height: 100, 
    resizeMode: 'contain', 
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default App;
