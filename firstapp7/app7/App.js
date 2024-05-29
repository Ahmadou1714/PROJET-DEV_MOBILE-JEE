import React from 'react';
import { Text, SafeAreaView, StyleSheet, View, TouchableOpacity } from 'react-native';
//import UselessTextInput from './components/TextInput';

const App = () => {
    const [count, setCount] = React.useState(0);
    const modifie = () => setCount(prevCount => prevCount + 1);

    return (
        <View style={styles.container}>
            <View style={styles.countContainer}>
                <Text>Nombre de clics : {count}</Text>
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={modifie}
            >
                <Text>Pressez Ici</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#add8e6', 
    },
    countContainer: {
        alignItems: 'center',
        padding: 10,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
    },
});

export default App;
