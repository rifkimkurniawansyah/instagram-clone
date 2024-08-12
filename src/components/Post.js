import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Post({ data }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: data.imageUrl }} style={styles.profileImage} />
        <Text style={styles.username}>{data.username}</Text>
      </View>
      <Image source={{ uri: data.feed.imageUrl }} style={styles.postImage} />
      <View style={styles.iconContainer}>
        <View style={styles.leftIcons}>
          <TouchableOpacity onPress={() => navigation.navigate('Favorite')}>
            <Ionicons name="heart-outline" size={30} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Favorite')}>
            <Ionicons name="chatbubble-outline" size={30} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Favorite')}>
            <Ionicons name="paper-plane-outline" size={30} color="#000" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => console.log('Saved this post')}>
          <Ionicons name="bookmark-outline" size={30} color="#000" style={styles.bookmarkIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.likes}>{data.feed.totalLikes} likes</Text>
        <Text style={styles.caption}>
          <Text style={styles.username}>{data.username}</Text>{" "}
          {data.feed.caption}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  profileImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 10,
  },
  username: {
    fontWeight: "bold",
  },
  postImage: {
    width: "100%",
    aspectRatio: 1,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
  },
  leftIcons: {
    flexDirection: "row",
    gap: 10,
  },
  bookmarkIcon: {
    marginLeft: 15,
  },
  footer: {
    padding: 10,
  },
  likes: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  caption: {
    lineHeight: 18,
  },
});
