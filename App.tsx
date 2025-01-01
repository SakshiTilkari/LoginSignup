import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpForm from './screens/SignUpForm';
import LoginForm from './screens/LoginForm';
import WelcomeScreen from './screens/WelcomeScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="SignUp" component={SignUpForm} options={{headerShown: false,}} />
        <Stack.Screen name="Login" component={LoginForm} options={{headerShown: false,}} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false,}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
