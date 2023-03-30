import {SafeAreaView, StatusBar} from 'react-native';

import {Form} from './src/screens';
import {Provider} from 'react-redux';
import React from 'react';
import {globalStyles} from './src/styles';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={globalStyles.flex}>
        <StatusBar backgroundColor={'#000'} barStyle="light-content" />
        <Form />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
