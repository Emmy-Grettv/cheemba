import React, { useEffect } from 'react';
import SplashScreen from '@/pages/SplashScreen';
import { StyleSheet } from 'react-native';
import OnBoarding from '@/pages/OnBoarding';
import Qrcode from '@/pages/qrcode';
import { Welcome } from '@/pages/Welcome';
import { Confirm } from '@/pages/Confirm';
import { EnterInfo } from '@/pages/EnterInfo';
import { Signin } from '@/pages/Signin';
import { Home } from '@/pages/Home';
import { Profile } from '@/pages/Profile';
import { Status } from '@/pages/Status';
import { Statistics } from '@/pages/Statistics';
import { ScrollView, View } from 'react-native';
import { Notifications } from '@/pages/Notifications';
import { createStackNavigator, StackNavigationProp, StackScreenProps } from '@react-navigation/stack';

interface ConfirmPhoneProps {
  phone: number;
}


const Stack = createStackNavigator();

export default function App({ phone }: ConfirmPhoneProps) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
    <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen
          name="Splash"
          component={SplashScreenWrapper}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OnBoarding"
          component={OnBoarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Qrcode"
          component={Qrcode}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Confirm"
          component={(props: StackScreenProps<any>) => <Confirm {...props} phone={phone} />}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EnterInfo"
          component={(props: StackScreenProps<any>) => <EnterInfo {...props} phone={phone} />}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signin"
          component={(props: StackScreenProps<any>) => <Signin {...props} phone={phone} />}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Statistics"
          component={Statistics}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Status"
          component={Status}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Noti"
          component={Notifications}
          options={{ headerShown: false }}
        />
    </Stack.Navigator>
    </ScrollView>

  );
}

type SplashScreenProps = {
  navigation: StackNavigationProp<any, 'Splash'>;
};

const SplashScreenWrapper: React.FC<SplashScreenProps> = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('OnBoarding');
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return <SplashScreen />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    alignContent: 'center',
    backgroundColor: '#6FCF97',
  },

});