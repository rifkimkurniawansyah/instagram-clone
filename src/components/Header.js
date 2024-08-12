import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"; // Import Ionicons

export default function Header() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/icons/instagram.png')}
        style={styles.logo}
      />
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Ionicons name="heart-outline" size={24} color="black" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../../assets/icons/messenger.jpg')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    height: 44,
    borderBottomWidth: 1,
    borderBottomColor: "#DBDBDB",
  },
  logo: {
    fontFamily: "StyleScript-Regular",
    fontSize: 24,
    width: 100,
    height: 30,
  },
  iconContainer: {
    flexDirection: "row",
  },
  icon: {
    marginLeft: 15,
    width: 24,
    height: 24,
  },
});
