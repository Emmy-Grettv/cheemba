import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Dimensions, Image } from 'react-native';

const { height, width } = Dimensions.get('window');

export default function SplashSreen() {
  return (
    <ImageBackground
      source={require('../assets/images/splash-bg.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.chee}>Chee-<Text style={styles.mba}>mba</Text> </Text>
        <Text style={styles.desc}>Mobile waste management app</Text>
      </View>
      <View style={styles.logocontainer}>
        <Image source={require('../assets/images/logo.png')} />
        <Text style={styles.cheemba}>CHEEMBA</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    width: width,
    height: height,
    resizeMode: 'cover',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#6FCF97',
    gap: 135,
    padding: 20,
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logocontainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 65,
  },

  cheemba: {
    textAlign: 'center',
    fontSize: 50,
    fontWeight: 'bold',
    color: '#E2E7F6',
  },
  chee: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  mba: {
    color: '#0085CD',
    fontSize: 20,
    fontWeight: 'bold',
  },
  desc: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '200'
  }
});

