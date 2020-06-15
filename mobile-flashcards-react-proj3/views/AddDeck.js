import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {Title, TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';
import {saveDeckTitle} from "../utils/api";
import { connect } from 'react-redux';
import { addDeck } from '../actions/index';

class AddDeck extends Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  state = {
    name: ""
  }

  handleChange(event) {
    this.setState({name: event});
  }

  handleClick() {
    const { dispatch } = this.props;
    saveDeckTitle(this.state.name).then(() => {
      dispatch(addDeck(this.state.name));
    });

    this.props.navigation.navigate("Home",);
  }

  render() {
    return (
      <View style={styles.container}>
        <Title>Deck Name</Title>
        <TextInput label='Deck Name' value={this.state.name} onChangeText={this.handleChange}/>
        <View style={styles.submitBtn}>
          <Button mode="contained" onPress={() => this.handleClick()}>Create Deck</Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    textAlign: "center"
  },
  submitBtn: {
    marginTop: 10
  }
});

export default connect()(AddDeck);