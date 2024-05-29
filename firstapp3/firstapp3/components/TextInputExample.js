import React from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Animated } from "react-native";

const TextInputExample = () => {
    const [text, setText] = React.useState('Useless Text');
    const [number, setNumber] = React.useState("");
    const [showContent, setShowContent] = React.useState(false);
    const fadeAnim = React.useRef(new Animated.Value(0)).current;

    const handleButtonPress = () => {
        setShowContent(!showContent);
    };

    React.useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: showContent ? 1 : 0,
                duration: 500,
                useNativeDriver: true,
            }
        ).start();
    }, [showContent]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={setText}
                    value={text}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setNumber}
                    value={number}
                    placeholder="useless placeholder"
                    keyboardType="numeric"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleButtonPress}
                >
                    <Text style={styles.buttonText}>
                        {showContent ? "Cacher Contenu" : "Afficher Contenu"}
                    </Text>
                </TouchableOpacity>
                <Animated.View style={[styles.contentContainer, { opacity: fadeAnim }]}>
                    <Text style={styles.contentText}>
                        Voici le texte saisi: {text}
                    </Text>
                    <Text style={styles.contentText}>
                        Voici le nombre saisi: {number}
                    </Text>
                </Animated.View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerContainer: {
        width: '80%',
    },
    input: {
        height: 40,
        marginVertical: 10,
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },
    button: {
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginVertical: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    contentContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    contentText: {
        fontSize: 16,
        marginVertical: 5,
    },
});

export default TextInputExample;
