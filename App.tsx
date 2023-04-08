/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {store} from './store';
import {Provider} from 'react-redux';
import 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import NavigationProvider from './src/navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationProvider>
        <SafeAreaProvider>
          <HomeScreen />
        </SafeAreaProvider>
      </NavigationProvider>
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
