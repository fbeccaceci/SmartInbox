import React from 'react'
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { InboxStackParamList } from './inboxStackParamList'

import { InboxScreen, MailViewScreen, SettingsScreen } from '@screens'

const Stack = createNativeStackNavigator<InboxStackParamList>()

const config: NativeStackNavigationOptions = {
  headerShown: false
}

export default () => (
  <Stack.Navigator screenOptions={config} >
    <Stack.Screen name='inbox' component={InboxScreen} />
    <Stack.Screen name='settings' component={SettingsScreen} />
    <Stack.Screen name='mailView' component={MailViewScreen} />
  </Stack.Navigator>
)