import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Link } from 'expo-router';
import { Qrcode } from '@/pages/qrcode';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="qr-code" component={Qrcode} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
