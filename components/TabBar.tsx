import React, { useState } from "react";
import { Image, StyleSheet, View, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

export default function TabBar() {
  const [activeTab, setActiveTab] = useState<string>("Home");
  const navigation = useNavigation<StackNavigationProp<any>>();

  const handlePress = (tab: string) => {
    setActiveTab(tab);
    navigation.navigate(tab);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handlePress("Home")}>
        <Image
          source={require("../assets/tab/home.png")}
          style={[
            { tintColor: activeTab === "Home" ? "#93DFD5" : "#515979" },
          ]}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress("Statistics")}>
        <Image
          source={require("../assets/tab/statistics.png")}
          style={[
            { tintColor: activeTab === "Statistics" ? "#93DFD5" : "#515979" },
          ]}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress("Profile")}>
        <Image
          source={require("../assets/tab/profile.png")}
          style={[
            { tintColor: activeTab === "Profile" ? "#93DFD5" : "#515979" },
          ]}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 360,
    padding: 20,
    backgroundColor: "#253334",
  },
  
});
