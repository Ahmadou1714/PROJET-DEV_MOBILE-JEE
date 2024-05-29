import React from 'react';
import { SafeAreaView, StyleSheet, TextInput } from 'react-native';

const UselessTextInput = () => {
  const [text, setText] = React.useState("Text Initial");
  const [number, setNumber] = React.useState('');

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={(value) => {
          const numericValue = value.replace(/[^0-9]/g, '');
          setNumber(numericValue);
        }}
        value={number}
        placeholder=""
        keyboardType="numeric"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
  },
});

export default UselessTextInput;
