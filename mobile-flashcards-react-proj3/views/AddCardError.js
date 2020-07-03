import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class AddCardError extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Please fill in all form fields.</Text>
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

export default AddCardError;