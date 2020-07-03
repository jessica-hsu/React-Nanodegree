import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Headline, Title, TextInput, Button } from 'react-native-paper';
import { setLocalNotification, clearLocalNotification } from '../utils/notifications';

class Quiz extends Component {

  constructor(props) {
    super(props);

    this.handleShowAnswerClick = this.handleShowAnswerClick.bind(this);
    this.handleCorrectClick = this.handleCorrectClick.bind(this);
    this.handleIncorrectClick = this.handleIncorrectClick.bind(this);
    this.handleStartQuizAgainClick = this.handleStartQuizAgainClick.bind(this);
    this.handleBackToDeckClick = this.handleBackToDeckClick.bind(this);
  }
  
  componentDidMount() {
    clearLocalNotification().then(() => setLocalNotification());
  }

  state = {
    completed: false,
    showAnswer: "none",
    total: this.props.navigation.state.params.questions.length,
    correct: 0,
    incorrect: 0,
    currentQuestionNumber: 1,
    index: 0
  }

  handleShowAnswerClick() {
    const current = this.state.showAnswer;
    if (current == "none") {
      this.setState({showAnswer: "flex"});
    } else {
      this.setState({showAnswer: "none"})
    }
  }

  handleCorrectClick() {
    const current = this.state.correct;
    const currNum = this.state.currentQuestionNumber;
    const currIndex = this.state.index;
    if (currNum == this.state.total) {
      this.setState({correct: current + 1, completed: true});
    } else {
      this.setState({correct: current + 1, index: currIndex + 1, currentQuestionNumber: currNum + 1});
    }
    this.setState({showAnswer: "none"});
  }

  handleIncorrectClick() {
    const current = this.state.incorrect;
    const currNum = this.state.currentQuestionNumber;
    const currIndex = this.state.index;
    if (currNum == this.state.total) {
      this.setState({incorrect: current + 1, completed: true});
    } else {
      this.setState({incorrect: current + 1, index: currIndex + 1, currentQuestionNumber: currNum + 1});
    }
    this.setState({showAnswer: "none"});
  }

  handleStartQuizAgainClick() {
    this.setState({
      completed: false,
      showAnswer: "none",
      total: this.props.navigation.state.params.questions.length,
      correct: 0,
      incorrect: 0,
      currentQuestionNumber: 1,
      index: 0
    });
  }

  handleBackToDeckClick() {
    this.props.navigation.navigate("DeckDetails");
  }

  render() {

    const questions = this.props.navigation.state.params.questions;
    
    return (
      <View style={styles.container}>
        {
          this.state.completed ?
          <View>
            <Headline style={styles.title, styles.center}>You got {this.state.correct} out of {this.state.total} questions correct.</Headline>
            <View style={styles.submitBtn}>
              <Button mode="contained" onPress={() => this.handleStartQuizAgainClick()}>Start Quiz Again</Button>
            </View>
            <View style={styles.submitBtn}>
              <Button mode="contained" onPress={() => this.handleBackToDeckClick()}>Back to Deck</Button>
            </View>
          </View>
          :
          <View>
            <Headline style={styles.title, styles.center}>{this.state.currentQuestionNumber}/{this.state.total} Questions</Headline>
            <Title>Question: {questions[this.state.index].question}</Title>
            <Title style={{marginTop: 20, marginBottom: 20, display: this.state.showAnswer}}>Answer: {questions[this.state.index].answer}</Title>
            <View style={styles.submitBtn}>
              <Button mode="contained" onPress={() => this.handleShowAnswerClick()}>Show Answer</Button>
            </View>
            <View style={styles.submitBtn}>
              <Button mode="contained" onPress={() => this.handleCorrectClick()}>Correct</Button>
            </View>  
            <View style={styles.submitBtn}>
              <Button mode="contained" onPress={() => this.handleIncorrectClick()}>Incorrect</Button>
            </View>    
          </View>
        }
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
    marginTop: 30
  },
  submitBtn: {
    marginTop: 10
  },
  center: {
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20
  }
})

export default Quiz;