import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';

import { InboxScreen } from './screens';
import { store } from '@redux/store';
import { AuthorizationLifeCycleWrapper } from '@components';

import './configs/momentConfig'
import './services/authenticationService'

const App: React.FC = () => {
  
  return (
    <NavigationContainer>
      <Provider store={store} >
        <AuthorizationLifeCycleWrapper>
          <SafeAreaProvider>
            <InboxScreen />
          </SafeAreaProvider>
        </AuthorizationLifeCycleWrapper>
      </Provider>
    </NavigationContainer>
  )
};

export default App;
