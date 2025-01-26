import { useRouter } from 'expo-router';
import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Dimensions, Image, TouchableOpacity } from 'react-native';

const { height, width } = Dimensions.get('window');

export default function OnBoarding() {
  const router = useRouter(); 

  const handlePress = () => {
    router.push('./qrcode')
  };

  return (
    <ImageBackground
      source={require('../assets/images/qr-code1.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Image source={require('@/assets/images/qrcode.png')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.header}>Get Started</Text>
          <View style={styles.cont}>
            <Text style={styles.text2}>Scan the qr code on the head of cheemba</Text> {'\n'}
            <Text style={styles.text1}> to get real-time alerts on your</Text>{'\n'}
            <Text style={styles.text2}> mobile application.</Text>{'\n'}
            <Text style={styles.text3}> Fast & Secure</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handlePress} style={styles.button}>
            <Image source={require('@/assets/images/arrow.png')} />
          </TouchableOpacity>
        </View>
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
    marginBottom: 120,
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 155,
  },
  header: {
    fontSize: 40,
    color: '#333333',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  cont: {
    // fontSize: 16
  },
  text1: {
    marginLeft: 5,
    color: '#3E3E42',
    textAlign: 'center',
    fontSize: 16
  },
  text2: {
    marginLeft: 5,
    color: '#3E3E42',
    textAlign: 'center',
    fontSize: 16,
  },
  text3: {
    marginLeft: 5,
    color: '#3E3E42',
    textAlign: 'center',
    fontSize: 16
  },
  text4: {
    marginLeft: 5,
    color: '#3E3E42',
    fontSize: 16
  },
  button: {
    backgroundColor: '#70FF87',
    height: 60,
    width: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 40,
    right: 30,
  }
});
