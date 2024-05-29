import React from 'react';
import { SafeAreaView, View, StyleSheet, Text } from 'react-native';
import { Card } from 'react-native-paper';
import Etudiant from './components/Etudiant';
import Rectangle from './components/Rectangle';
import Rectangle_Jaune from './components/Rectangle_Jaune';
import Rectangle_Vert from './components/Rectangle_Vert';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.horizontalContainer}>
        <Rectangle />
        <Rectangle_Jaune />
        <Rectangle_Vert />
        <Etudiant />
      </View>
      <AppContent />
    </SafeAreaView>
  );
};

const AppContent = () => {
  const title = 'React Native pour les mobiles';
  const option = 'Licence informatique et développement';
  const nom = 'Étudiant';
  const matricule = 'mat002';

  return (
    <Card>
      <Text style={styles.text}>
        C'est mon titre {title} {'\n'}
        {option} {'\n'}
        {nom} {'\n'}
        {matricule}
      </Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  horizontalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    padding: 20,
  },
});

export default App;
