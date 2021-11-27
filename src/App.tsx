import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';

import { store } from '@redux/store';
import { AuthenticationFlowNavigator } from '@navigators';

import './configs/momentConfig'
import './services/authenticationService'

const App: React.FC = () => {

  return (
    <NavigationContainer>
      <Provider store={store} >
          <SafeAreaProvider>
            <AuthenticationFlowNavigator />
          </SafeAreaProvider>
      </Provider>
    </NavigationContainer>
  )
};

export default App;
