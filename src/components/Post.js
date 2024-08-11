import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default function Post({ data }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: data.imageUrl }} style={styles.profileImage} />
        <Text style={styles.username}>{data.username}</Text>
      </View>
      <Image source={{ uri: data.feed.imageUrl }} style={styles.postImage} />
      <View style={styles.footer}>
        <Text style={styles.likes}>{data.feed.totalLikes} likes</Text>
        <Text style={styles.caption}>
          <Text style={styles.username}>{data.username}</Text> {data.feed.caption}
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
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  profileImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 10,
  },
  username: {
    fontWeight: 'bold',
  },
  postImage: {
    width: '100%',
    aspectRatio: 1,
  },
  footer: {
    padding: 10,
  },
  likes: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  caption: {
    lineHeight: 18,
  },
});