import { Image, StyleSheet, View, TouchableOpacity } from "react-native";

export default function TabBar(){
    return(
        <View style={styles.container}>
            <TouchableOpacity><Image source={require('../assets/tab/home.png')}/></TouchableOpacity>
            <TouchableOpacity><Image source={require('../assets/tab/statistics.png')}/></TouchableOpacity>
            <TouchableOpacity><Image source={require('../assets/tab/profile.png')}/></TouchableOpacity>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width: 360,
        padding: 20,
        backgroundColor:'#253334',
    }
})