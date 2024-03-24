import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AuthScreen } from './screens/AuthScreen'
import { MainScreen } from './screens/MainScreen'
import React from 'react'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Authentication ' component={AuthScreen} />
        <Stack.Screen name='Main' component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
