import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Dimensions, Image } from 'react-native';

const { height, width } = Dimensions.get('window'); // Get device dimensions

export default function SplashSreen() {
  return (
    <ImageBackground
      source={require('../assets/images/splash-bg.png')} // Replace with your image path
      style={styles.background}
      resizeMode="cover" // Make sure the image covers the entire background
    >
      <View style={styles.overlay}>
       <Image source={require('@/assets/images/cheemba.png')} style={styles.image} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    width: width,  
    height: height,  
    resizeMode: 'cover',  
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  image: {
    marginBottom: 20,
  }
});

