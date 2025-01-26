import React, { useEffect, useState } from 'react';
import SplashScreen from '@/pages/SplashScreen';
import { StyleSheet, View, ScrollView } from 'react-native';
import OnBoarding from '@/pages/OnBoarding';

export default function App() {
  const [showHomeScreen, setShowHomeScreen] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowHomeScreen(false);
  //   }, 45000);
  //   return () => clearTimeout(timer);
  // }, []);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* {showHomeScreen ? <SplashScreen /> : <OnBoarding />} */}
      <SplashScreen/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    paddingTop: 20,
    backgroundColor: '#fff',
  },
});
