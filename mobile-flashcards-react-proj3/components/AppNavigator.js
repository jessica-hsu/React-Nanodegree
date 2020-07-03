import { createStackNavigator, createAppContainer } from 'react-navigation';
import DeckList from "../views/DeckList";
import AddDeck from "../views/AddDeck";
import Quiz from "../views/Quiz";
import DeckDetails from "../views/DeckDetails";
import AddCard from "../views/AddCard";
import NoQuestions from "../views/NoQuestions";
import AddCardError from "../views/AddCardError";

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: DeckList, 
      navigationOptions: {
        title: "All Decks",
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#6200ee",
        }
      }
    },
    AddDeck: {
      screen: AddDeck, 
      navigationOptions: {
        title: "Create New Deck",
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#6200ee",
        }
      }
    },
    Quiz: {
      screen: Quiz, 
      navigationOptions: {
        title: "Quiz",
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#6200ee",
        }
      }
    },
    DeckDetails: {
      screen: DeckDetails, 
      navigationOptions: {
        title: "Deck Details",
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#6200ee",
        }
      }
    },
    AddCard: {
      screen: AddCard, 
      navigationOptions: {
        title: "Create New Card",
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#6200ee",
        }
      }
    },
    NoQuestions: {
      screen: NoQuestions, 
      navigationOptions: {
        title: "Quiz Error",
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#6200ee",
        }
      }
    },
    AddCardError: {
      screen: AddCardError, 
      navigationOptions: {
        title: "Error",
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#6200ee",
        }
      }
    }
  }, 
  {
    initialRouteName: 'Home',
  }
  
);

export default createAppContainer(AppNavigator);