import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { Button } from 'react-native-paper';
import Deck from '../components/Deck';
import {getDecks, reset} from "../utils/api";
import { connect } from 'react-redux';
import { receiveDecks } from '../actions/index';
import { setLocalNotification } from '../utils/notifications';

class DeckList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      decks: {},
      startValue: new Animated.Value(1000),
      endValue: 0,
      duration: 20000,
    }
    this.handleDeckClick = this.handleDeckClick.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    setLocalNotification();
    getDecks().then((decks) => {
      dispatch(receiveDecks(decks));
    });
  }

  handleAddClick() {
    this.props.navigation.navigate('AddDeck');
  }

  handleDeckClick(key) {
    Animated.timing(this.state.startValue, {
      toValue: this.state.endValue,
      duration: this.state.duration,
      useNativeDriver: true,
    }).start();
    this.props.navigation.navigate('DeckDetails', { key: key });
  }

  render() {

    const {decks} = this.props;
    return (
      <View style={styles.container}>
        {Object.keys(decks).map((key) => (
          <TouchableOpacity
            key={key}
            style={styles.deck}
            onPress={() => this.handleDeckClick(key)}>
            <Deck
              title={decks[key].title}
              deckSize={decks[key].questions.length}
            />
          </TouchableOpacity>
        ))}
        <View style={styles.addButton}>
          <Button mode="contained" onPress={() => this.handleAddClick()}>
            Add Deck
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
  deck: {
    marginTop: 5,
    marginBottom: 5,
  },
  addButton: {
    marginTop: 10,
    marginBottom: 10,
  }
});


function mapStateToProps(decks) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(DeckList);