import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default class ExampleState extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "Je suis le titre" };
  }

  render() {
    const { title } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Voici le contenu de ce qui a changé :
        </Text>

        <TextInput
          onChangeText={(text) => {
            this.setState({ title: text });
          }}
          value={this.state.title}
        />

        <Text style={styles.paragraph}>
          {this.state.title}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
  },
});
