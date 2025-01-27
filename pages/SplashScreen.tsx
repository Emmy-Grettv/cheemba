import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Dimensions, Image } from 'react-native';

const { height, width } = Dimensions.get('window');

export default function SplashSreen() {
  return (
    <View style={{display:'flex', flex:1, backgroundColor:'#6FCF97'}}>
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
        <Image source={require('../assets/images/logo.png')} style={{position:'relative', left: -11}}/>
        <Text style={styles.cheemba}>CHEEMBA</Text>
      </View>
    </ImageBackground>
    </View>
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
    gap: 60,
    position: 'relative',
    right: 20,
    top: 50,
    // backgroundColor: '#6FCF97',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position:'relative',
    left: 20,
  },
  logocontainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    left: 15,
    top: 30,
  },

  cheemba: {
    textAlign: 'center',
    fontSize: 30,
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

