import { StyleSheet, View, Text } from "react-native"

export const Home = () => {
    return (
        <View style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10, paddingHorizontal: 10 }}>
            <View style={styles.homeContainer}>
                <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', width: 275}}>
                    <View style={{width: 35, height: 35, borderRadius: 50, backgroundColor:'#ccccc5'}}></View>
                    <View style={{width: 35, height: 35, borderRadius: 50, backgroundColor:'#ccccc5'}}></View>
                </View>
                <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', width: 275}}>
                    <Text style={{color:'#233B45', fontWeight: 700, fontSize: 14}}>Hey Jacob👋</Text>
                    <View style={{width: 20, height: 20, borderRadius: 50, backgroundColor:'#ccccc5'}}></View>
                </View>
                <Text style={{color:'#233B45', fontSize: 12, textAlign:'left'}}>Let’s see your contribution to the society</Text>
                <View style={styles.stati}></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    homeContainer: {
        backgroundColor: '#ffffff',
        width: 320,
        display:'flex',
        justifyContent:'center',
        alignItems:'flex-start',
        borderRadius: 20,
        borderWidth: 3,
        borderColor:'#F5F5F55C',
        padding: 10,
        gap: 10,
    },
    stati:{
        width: 294,
        height: 170,
        backgroundColor:'#115976F7',
        borderRadius: 20,
    }
})