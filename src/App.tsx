import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'

import { InboxScreen } from './screens';
import { store } from '@redux/store';

import './configs/momentConfig'
import './services/authenticationService'
import { AuthorizationLifeCycleWrapper } from '@components';

const App: React.FC = () => {
  return <Provider store={store} >
    <AuthorizationLifeCycleWrapper>
      <SafeAreaProvider>
        <InboxScreen />
      </SafeAreaProvider>
    </AuthorizationLifeCycleWrapper>
  </Provider>
};

export default App;
