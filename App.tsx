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
import {KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';
import NavigationProvider from './src/navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
function App(): JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{flex: 1}}
          keyboardVerticalOffset={Platform.OS === 'ios' ? -64 : 0}>
          <NavigationProvider />
        </KeyboardAvoidingView>
      </SafeAreaProvider>
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
