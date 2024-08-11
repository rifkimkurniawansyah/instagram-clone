import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import likeIcon from "./assets/icons/like.png"
import messengerIcon from "./assets/icons/messenger.jpg"

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Instagram</Text>
      <View style={styles.iconContainer}>
        <Image
          source={likeIcon}
          style={styles.icon}
        />
        <Image
          source={messengerIcon}
          style={styles.icon}
        />
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
  },
  iconContainer: {
    flexDirection: "row",
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 15,
  },
});
