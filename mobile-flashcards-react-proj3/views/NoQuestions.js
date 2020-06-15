import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class NoQuestions extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Please add cards to deck before starting quiz.</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    textAlign: "center"
  }
})

export default NoQuestions;