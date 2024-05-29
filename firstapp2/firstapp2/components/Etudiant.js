import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Etudiant() {
  const nom = 'Étudiant1';
  const prenom = 'Prénom1';
  const matricule = 'Matricule1';

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'blue',
      padding: 8,
    },
  });

  return (
    <View style={styles.container}>
      <Text>
        {' '}
        {nom} {prenom} {matricule}
      </Text>
    </View>
  );
}

export default Etudiant;
