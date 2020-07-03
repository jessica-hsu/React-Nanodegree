import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Headline, Title, TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { addCardToDeck } from '../utils/api';
import { connect } from 'react-redux';
import { addCard } from '../actions/index';

class AddCard extends Component {
  constructor(props) {
    super(props);

    this.handleQuestionChange = this.handleQuestionChange.bind(this);
    this.handleAnswerChange = this.handleAnswerChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  state = {
    title: this.props.title,
    question: '',
    answer: '',
  };

  handleQuestionChange(event) {
    this.setState({ question: event });
  }

  handleAnswerChange(event) {
    this.setState({ answer: event });
  }

  handleClick() {
    if (this.state.question === '' || this.state.answer === '') {
      this.props.navigation.navigate("AddCardError");
    } else {
      const { dispatch } = this.props;
      const card = {
        question: this.state.question,
        answer: this.state.answer
      };
      addCardToDeck(this.state.title, card).then(() => {
        dispatch(addCard(this.state.title, card));
      });
      this.props.navigation.navigate('DeckDetails');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.center}>
          <Title>Question</Title>
          <TextInput
            label="Question"
            value={this.state.question}
            onChangeText={this.handleQuestionChange}
          />
        </View>
        <View style={styles.center}>
          <Title>Answer</Title>
          <TextInput
            label="Answer"
            value={this.state.answer}
            onChangeText={this.handleAnswerChange}
          />
        </View>
        <View style={styles.submitBtn}>
          <Button mode="contained" onPress={() => this.handleClick()}>
            Create Card
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    textAlign: 'center',
  },
  submitBtn: {
    marginTop: 10,
  },
  center: {
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
});

function mapStateToProps(decs, props) {
  const key = props.navigation.state.params.key
  return {
    title: key
  };
}

export default connect(mapStateToProps)(AddCard);