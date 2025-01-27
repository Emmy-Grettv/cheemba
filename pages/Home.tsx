import { StyleSheet, View, ScrollView, Text, Image } from "react-native"
import WhatToDoCard from "@/components/whatToDoCard"
import TabBar from "@/components/TabBar"

export const Home = () => {
    return (
        <ScrollView contentContainerStyle={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10, paddingHorizontal: 10,  backgroundColor: '#6FCF97', }}>
            <ScrollView contentContainerStyle={styles.homeContainer}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 275 }}>
                    <View style={{ width: 35, height: 35, borderRadius: 50, display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Image source={require('../assets/icons/menu.png')} /></View>
                    <View style={{ width: 35, height: 35, borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}><Image source={require('../assets/icons/profile.png')} /></View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 275 }}>
                    <Text style={{ color: '#233B45', fontWeight: 700, fontSize: 14 }}>Hey Jacob👋</Text>
                    <View style={{ width: 20, height: 20, borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}><Image source={require('../assets/icons/attention.png')} /></View>
                </View>
                <Text style={{ color: '#233B45', fontSize: 12, textAlign: 'left' }}>Let’s see your contribution to the society</Text>
                <View style={styles.stati}>
                    <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', width: 275, padding: 10 }}>
                        <Text style={{ color: '#FFFFFF', width: 100, textAlign: 'left' }}>Good Going, Jacob</Text>
                        <Image source={require('../assets/images/4.png')} style={{ width: 28, height: 42 }} />
                    </View>
                    <View style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', width: 275, padding: 10, gap: 8, }}>
                        <View>
                            <Image source={require('../assets/images/graph.png')} />
                        </View>
                        <View style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, }}>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 5 }}><View style={{ width: 8, height: 8, backgroundColor: '#DC7561', borderRadius: 50 }}></View><Text style={{ color: '#ffffff' }}>Plastics</Text></View>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 5 }}><View style={{ width: 8, height: 8, backgroundColor: '#89C280', borderRadius: 50 }}></View><Text style={{ color: '#ffffff' }}>Metals</Text></View>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 5 }}><View style={{ width: 8, height: 8, backgroundColor: '#FFDA75', borderRadius: 50 }}></View><Text style={{ color: '#ffffff' }}>Biodegradable</Text></View>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 5 }}><View style={{ width: 8, height: 8, backgroundColor: '#6983C7', borderRadius: 50 }}></View><Text style={{ color: '#ffffff' }}>Papers</Text></View>
                        </View>
                        <View style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 10, }}>
                            <Text style={{ color: '#ffffff' }}>41%</Text>
                            <Text style={{ color: '#ffffff' }}>39%</Text>
                            <Text style={{ color: '#ffffff' }}>12%</Text>
                            <Text style={{ color: '#ffffff' }}>8%</Text>
                        </View>
                    </View>
                </View>
                <Text style={{ color: '#233B45', fontSize: 14, fontWeight: "semibold", textAlign: 'left' }}>Things You Can Do</Text>
                <View style={{ display: 'flex', gap: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 5, paddingHorizontal: 10 }}>
                        <WhatToDoCard iconImage={require('../assets/icons/shop.png')} text1="Shop Wisely" text2="Checklists" />
                        <WhatToDoCard iconImage={require('../assets/icons/energy.png')} text1="Conserve Energy" text2="Devices" containerBackgroundColor="#FEF8E8" iconContainerBackgroundColor="#FFF2C9" />
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 5, paddingHorizontal: 10 }}>
                        <WhatToDoCard iconImage={require('../assets/icons/shop.png')} text1="Shop Wisely" text2="Checklists" />
                        <WhatToDoCard iconImage={require('../assets/icons/energy.png')} text1="Conserve Energy" text2="Devices" containerBackgroundColor="#FEF8E8" iconContainerBackgroundColor="#FFF2C9" />
                    </View>
                </View>
            </ScrollView>
            <TabBar />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    homeContainer: {
        backgroundColor: '#ffffff',
        width: 320,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderRadius: 20,
        borderWidth: 3,
        borderColor: '#F5F5F55C',
        padding: 10,
        gap: 20,
    },
    stati: {
        width: 294,
        height: 230,
        backgroundColor: '#115976F7',
        borderRadius: 20,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 5,
    }
})