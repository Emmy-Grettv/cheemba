import React from 'react';
import { Text, View, StyleSheet, TextInput, Image } from 'react-native';
import { Button } from '@/components/Button';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';


interface ConfirmPhoneProps {
    phone: number;
}

export const Confirm: React.FC<ConfirmPhoneProps> = ({ phone }) => {
    const navigation = useNavigation<StackNavigationProp<any>>();
    const handleEnterInfo = () => {
        navigation.navigate('EnterInfo', { phone: Number(phone) });
    };
    return (
        <View style={styles.welcome}>
            <View style={styles.container}>
                <Text style={styles.chee}>Chee-<Text style={styles.mba}>mba</Text> </Text>
                <Text style={styles.desc}>Mobile waste management app</Text>
            </View>
            <View style={styles.welcomeCont}>
                <View style={{ display: 'flex', gap: 20 }}>
                    <Text style={{ color: '#404040', fontWeight: '600', fontSize: 24, textAlign: 'left' }}>Confirmation Phone Number</Text>
                    <View style={{ display: 'flex' }}>
                        <Text style={{ color: '#404040', fontWeight: '400', fontSize: 12, textAlign: 'left' }}>We sent a code via SMS to {phone}</Text>
                        <Text style={{ color: '#404040', fontWeight: '400', fontSize: 12, textAlign: 'left' }}>Enter it below:</Text>
                    </View>
                    <TextInput style={styles.input} placeholder='4 Digit Confirmation Pin' />
                </View>
                <Button title='Confirm' onPress={handleEnterInfo} />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 20 }}>
                <View style={{ width: 80, height: 43, borderColor: '#FFFFFF', borderWidth: 2, borderRadius: 40, display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Image source={require('../assets/icons/twitter.png')} /></View>
                <View style={{ width: 80, height: 43, borderColor: '#FFFFFF', borderWidth: 2, borderRadius: 40, display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Image source={require('../assets/icons/google.png')} /></View>
                <View style={{ width: 80, height: 43, borderColor: '#FFFFFF', borderWidth: 2, borderRadius: 40, display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Image source={require('../assets/icons/ig.png')} /></View>
            </View>
            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#FFFFFF', fontSize: 12 }}>Already have an account, <Text style={{ fontWeight: '600', cursor: 'pointer', textDecorationLine: 'underline' }}>Login</Text> </Text>
                <Text style={{ color: '#FFFFFF', fontSize: 12 }}>Forgot <Text style={{ fontWeight: '600', cursor: 'pointer', textDecorationLine: 'underline' }}>Password?</Text> </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    welcome: {
        flex: 1,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        backgroundColor:'#6FCF97'
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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
    },
    welcomeCont: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 20,
        width: 300,
        height: 400,
        gap: 120
    },
    input: {
        width: 250,
        backgroundColor: '#CFCFCF36',
        borderRadius: 50,
        display: 'flex',
        paddingHorizontal: 25,
    }
})