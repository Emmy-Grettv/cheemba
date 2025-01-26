import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface buttonProps{
    title: string;
    onPress?: () => void;
}

export  const Button:  React.FC<buttonProps> =({
    title,
    onPress,
})=>{
    return(
        <TouchableOpacity style={styles.button}  onPress={onPress}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    title:{
        color:'#FFFFFF',
        fontWeight: 600,
        fontSize: 16,
    },
    button:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width: 250,
        padding: 10,
        borderRadius: 40,
        backgroundColor:'#4D4D4D',
        cursor: 'pointer',
    },
})