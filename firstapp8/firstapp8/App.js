import React from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet, StatusBar, Image } from 'react-native';

const DATA = [
    {
        id: 'moo1',
        nom: 'nometu1',
        prenom: 'prenometud1',
        photo: require('./assets/Images/Etudiant1.jpg')
    },
    {
        id: 'moo2',
        nom: 'nometu2',
        prenom: 'prenometud2',
        photo: require('./assets/Images/Etudiant2.jpg')
    },
    {
        id: 'moo3',
        nom: 'nometu3',
        prenom: 'prenometud3',
        photo: require('./assets/Images/Etudiant3.jpg')
    },
];

const Item = ({ nom, prenom, photo }) => (
    <View style={styles.item}>
        <Image source={photo} style={styles.photo} />
        <Text style={styles.nom}>{nom}</Text>
        <Text style={styles.prenom}>{prenom}</Text>
    </View>
);

export default function App() {
    const renderItem = ({ item }) => (
        <Item nom={item.nom} prenom={item.prenom} photo={item.photo} />
    );

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Text style={styles.paragraph}>
              LISTE ETUDIANT
            </Text>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    paragraph: {
        margin: 24,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
    photo: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    nom: {
        fontSize: 24,
    },
    prenom: {
        fontSize: 20,
        color: 'gray',
    },
});
