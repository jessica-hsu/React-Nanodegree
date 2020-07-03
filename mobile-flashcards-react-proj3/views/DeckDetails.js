import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { Headline, Title, TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';
import {getDecks} from '../utils/api';
import { connect } from 'react-redux';

class DeckDetails extends Component {
  
  render() {

    const {navigation, title, questions} = this.props;

    let path = "Quiz";
    if (questions.length === 0) {
      path = "NoQuestions";
    }

    return (
      <View style={styles.container}>
        <Headline style={styles.title}>{title}</Headline>
        <Title style={styles.title}>{questions.length} Cards</Title>
        <View style={styles.button}>
          <Button mode="contained" onPress={() => navigation.navigate("AddCard", {key: title})}>Add Card</Button>
        </View>
        <View style={styles.button}>
          <Button mode="contained" onPress={() => navigation.navigate(path, {questions: questions})}>Start Quiz</Button>
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
  title: {
    marginTop: 30,
    textAlign: "center",
  },
  button: {
    marginTop: 10
  }
});

function mapStateToProps(decks, props) {
    const key = props.navigation.state.params.key;
    let title, questions;
    if (!decks[key]) {
      title = key;
      questions = [];
    } else {
      title = decks[key].title;
      questions = decks[key].questions;
    }
    return {
        title,
        questions
    }
}

export default connect(mapStateToProps)(DeckDetails);