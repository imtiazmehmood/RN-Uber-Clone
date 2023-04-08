/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {store} from './store';
import {Provider} from 'react-redux';
import {StyleSheet, Text, View} from 'react-native';

function App(): React.ReactNode {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>Lets build UBER!</Text>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
