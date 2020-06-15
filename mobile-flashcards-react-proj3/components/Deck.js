import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

class Deck extends Component {
  render() {

    const { title, deckSize } = this.props;

    return (
      <Card>
        <Card.Content>
          <Title>{title}</Title>
          <Paragraph>{deckSize} Cards</Paragraph>
        </Card.Content>
      </Card>
    )
  }
}

export default Deck;