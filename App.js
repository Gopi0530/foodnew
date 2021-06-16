import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import React from 'react';
import SearchScreen from './src/screens/SearchScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import ProductShowScreen from './src/screens/ProductShowScreen';

const Stack = createStackNavigator();
const App = () => {
  return (

    <NavigationContainer androidStatusBarColor="#34495e">
      <Stack.Navigator initialRouteName="Search">
        <Stack.Screen name="Search" component={SearchScreen} options={{
          title: 'Business Search'
         }} />
        <Stack.Screen name="Product" component={ ProductShowScreen}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;
