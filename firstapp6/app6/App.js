import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';

const listEtudiant = [
    { nom: 'nom etu1', prenom: 'prenom etu1', matricule: '123456', photo: require('./assets/Images/Etudiant1.jpg') },
    { nom: 'nom etu2', prenom: 'prenom etu2', matricule: '123457', photo: require('./assets/Images/Etudiant2.jpg') },
    { nom: 'nom etu3', prenom: 'prenom etu3', matricule: '123458', photo: require('./assets/Images/Etudiant3.jpg') },
    { nom: 'nom etu4', prenom: 'prenom etu4', matricule: '123459', photo: require('./assets/Images/Etudiant4.jpg') },
    { nom: 'nom etu5', prenom: 'prenom etu5', matricule: '123460', photo: require('./assets/Images/Etudiant5.jpg') },
    { nom: 'nom etu6', prenom: 'prenom etu6', matricule: '123461', photo: require('./assets/Images/Etudiant7.jpg') },
    { nom: 'nom etu7', prenom: 'prenom etu7', matricule: '123462', photo: require('./assets/Images/Etudiant8.png') },
    { nom: 'nom etu8', prenom: 'prenom etu8', matricule: '123463', photo: require('./assets/Images/Etudiant9.jpg') },
    { nom: 'nom etu9', prenom: 'prenom etu9', matricule: '123464', photo: require('./assets/Images/Etudiant10.jpg') },
];

export default function App() {
    const [compteur, setCompteur] = useState(0);

    const handleDebut = () => {
        setCompteur(0);
    };

    const handlePrecedent = () => {
        if (compteur > 0) {
            setCompteur(compteur - 1);
        }
    };

    const handleSuivant = () => {
        if (compteur < listEtudiant.length - 1) {
            setCompteur(compteur + 1);
        }
    };

    const handleFin = () => {
        setCompteur(listEtudiant.length - 1);
    };

    const handleModifier = () => {
        listEtudiant[compteur].nom = 'nom modifié';
        listEtudiant[compteur].prenom = 'prénom modifié';
        setCompteur(compteur);
    };

    const handleSupprimer = () => {
        listEtudiant.splice(compteur, 1);
        setCompteur(compteur > 0 ? compteur - 1 : 0);
    };

    const handleRechercher = () => {
        const etudiant = listEtudiant.find((etudiant) => etudiant.nom === 'nom etu1');
        if (etudiant) {
            setCompteur(listEtudiant.indexOf(etudiant));
        }
    };


    return (
        <View style={styles.container}>
            <View style={styles.studentContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.label}>Nom:</Text>
                    <Text style={styles.value}>{listEtudiant[compteur].nom}</Text>
                    <Text style={styles.label}>Prénom:</Text>
                    <Text style={styles.value}>{listEtudiant[compteur].prenom}</Text>
                    <Text style={styles.label}>Matricule:</Text>
                    <Text style={styles.value}>{listEtudiant[compteur].matricule}</Text>
                </View>
                <Image
                    style={styles.image}
                    source={listEtudiant[compteur].photo}
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleDebut}>
                    <Text style={styles.buttonText}>Début</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handlePrecedent}>
                    <Text style={styles.buttonText}>Précédent</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleSuivant}>
                    <Text style={styles.buttonText}>Suivant</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleFin}>
                    <Text style={styles.buttonText}>Fin</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleModifier}>
                    <Text style={styles.buttonText}>Modifier</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleSupprimer}>
                    <Text style={styles.buttonText}>Supprimer</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleRechercher}>
                    <Text style={styles.buttonText}>Rechercher</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    studentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#fff',
        width: '90%',
    },
    textContainer: {
        flex: 1,
    },
    label: {
        fontWeight: 'bold',
        color: '#333',
    },
    value: {
        marginBottom: 10,
        color: '#666',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginLeft: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '100%',
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: '#007BFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        margin: 5,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

