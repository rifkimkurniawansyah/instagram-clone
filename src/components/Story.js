import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Story({ data }) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#CA1D7E', '#E35157', '#F2703F']}
        start={{ x: 0.0, y: 1.0 }}
        end={{ x: 1.0, y: 1.0 }}
        style={styles.gradientBorder}
      >
        <Image source={{ uri: data.imageUrl }} style={styles.image} />
      </LinearGradient>
      <Text style={styles.username}>{data.username}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginRight: 15,
  },
  gradientBorder: {
    width: 68,
    height: 68,
    borderRadius: 34,
    padding: 2,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#fff',
  },
  username: {
    marginTop: 4,
    fontSize: 12,
  },
});