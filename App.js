import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ListPage from './android/app/src/screens/ListPage'; // ListPage 임포트
import ViewPage from './android/app/src/screens/ViewPage';
import MainScreen from './android/app/src/screens/MainScreen';
import WriteScreen from './android/app/src/screens/WriteScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="List" component={ListPage} />
        <Stack.Screen name="View" component={ViewPage} />
        <Stack.Screen name="Write" component={WriteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
