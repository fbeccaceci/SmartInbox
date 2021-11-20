import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context'

import {InboxScreen} from './screens';

const App: React.FC = () => {
  return <SafeAreaProvider>
    <InboxScreen />
  </SafeAreaProvider>
};

export default App;
