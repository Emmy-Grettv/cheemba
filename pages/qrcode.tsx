import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';


export type RootStackParamList = {
  Qrcode: undefined; 
  Welcome: { scannedText: string }; 
};
type QrcodeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Qrcode'>;

interface QrcodeProps {
  navigation: QrcodeScreenNavigationProp;
}

interface BarCodeReadEvent {
  data: string;
}

const Qrcode: React.FC<QrcodeProps> = ({ navigation }) => {
  const [scannedData, setScannedData] = useState<string | null>(null);

  const handleBarCodeRead = ({ data }: BarCodeReadEvent) => {
    setScannedData(data);
    navigation.navigate('Welcome', { scannedText: data });
  };

  return (
    <View style={{ flex: 1, backgroundColor:'#6FCF97' }}>
      <RNCamera
        style={{ flex: 1 }}
        onBarCodeRead={handleBarCodeRead}
        captureAudio={false}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Scan a QR Code</Text>
        </View>
      </RNCamera>
    </View>
  );
};

export default Qrcode;