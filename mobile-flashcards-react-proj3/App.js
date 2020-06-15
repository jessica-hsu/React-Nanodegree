import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AppNavigator from './components/AppNavigator';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/index';
import middleware from './middleware/index';

const store = createStore(reducer, middleware);

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <AppNavigator/>
        </View>
      </Provider>
    )
  }
}

export default App;