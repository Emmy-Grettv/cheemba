import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

interface WhatToDoCardProps {
  iconImage: any; 
  text1: string;
  text2: string;
  containerBackgroundColor?: string;
  iconContainerBackgroundColor?: string; 
}

const WhatToDoCard: React.FC<WhatToDoCardProps> = ({
  iconImage,
  text1,
  text2,
  containerBackgroundColor = '#FBF3F1', 
  iconContainerBackgroundColor = '#FDE1DC', 
}) => {
  return (
    <View style={[styles.container, { backgroundColor: containerBackgroundColor }]}>
      <View style={[styles.iconContainer, { backgroundColor: iconContainerBackgroundColor }]}>
        <Image source={iconImage} />
      </View>
      <Text style={styles.text1}>{text1}</Text>
      <Text style={styles.text2}>{text2}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 146,
    height: 150,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    padding: 10,
    borderRadius: 20,
  },
  iconContainer: {
    width: 54,
    height: 54,
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1: {
    color: '#233B45',
    fontSize: 16,
    fontWeight: 600, 
  },
  text2: {
    color: '#898A95',
    fontSize: 14,
    fontWeight: 600, 
  },
});

export default WhatToDoCard;